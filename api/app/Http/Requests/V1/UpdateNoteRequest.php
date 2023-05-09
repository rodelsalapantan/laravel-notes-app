<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateNoteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->route('note'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $userNoteIds = auth()->user()->notes()->pluck('id')->toArray();

        return [
            'title' => ['required', 'max:255'],
            'body' => ['required', 'string'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'id' => ['required', 'integer', 'exists:notes,id', Rule::in($userNoteIds)]
        ];
    }

    public function prepareForValidation(){
        $this->merge([
            'id' => intval($this->route('note')->id),
            'user_id' => $this->user()->id,
        ]);
    }
}

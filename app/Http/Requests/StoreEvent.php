<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEvent extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'string',
            'date' => 'required|date',
            'startTime' => 'required|time',
            'endTime' => 'required|time',
            'image' => 'image',
            'address' => 'string',
        ];
    }
}

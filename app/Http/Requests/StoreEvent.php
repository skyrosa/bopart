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
        return true;
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
            'description' => 'nullable|string',
            'date' => 'required|date',
            'startTime' => 'required|date_format:H:i:s',
            'endTime' => 'required|date_format:H:i:s',
            'image' => 'present',
            'address' => 'nullable|string',
            'capacity' => 'required|integer',
            'type' => 'required|string',
        ];
    }
}

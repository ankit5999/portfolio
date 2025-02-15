// Define the type for the request body
export interface RequestBody {
    [key: string]: any; // Replace 'any' with specific properties if known
}

// Define the type for the API response
export interface ApiResponse {
    data?: any; // Replace 'any' with specific data type if known
    status?: number;
    message?: string;
    [key: string]: any; // Allow for additional properties if necessary
}
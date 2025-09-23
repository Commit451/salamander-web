/**
 * Unified API Service for Salamander Web
 *
 * This service provides a standardized way to interact with the Salamander API,
 * following the same patterns used by the CLI and Flutter applications.
 *
 * Key features:
 * - Uses HTTP API endpoints instead of direct Firestore access
 * - Extensible base class for different resource types
 * - Consistent error handling across all operations
 * - Authentication token management
 */

export class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public response?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    message?: string;
}

/**
 * Base API Service class that can be extended for specific resources
 */
export abstract class BaseApiService {
    protected static readonly API_BASE_URL = 'https://api.salamander.space/v1';

    /**
     * Get authentication token from localStorage
     */
    protected static getAuthToken(): string {
        const token = localStorage.getItem('salamander_token');
        if (!token) {
            throw new Error('User not authenticated - no token found');
        }
        return token;
    }

    /**
     * Make authenticated HTTP request to the API
     */
    protected static async makeRequest<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const token = this.getAuthToken();
        const url = `${this.API_BASE_URL}${endpoint}`;

        const config: RequestInit = {
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                let errorMessage = `HTTP ${response.status}`;
                let errorResponse;

                try {
                    errorResponse = await response.json();
                    errorMessage = errorResponse.message || errorMessage;
                } catch {
                    errorMessage = await response.text() || errorMessage;
                }

                throw new ApiError(errorMessage, response.status, errorResponse);
            }

            // Handle 204 No Content responses
            if (response.status === 204) {
                return {} as T;
            }

            return await response.json();
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }

            // Handle network errors, CORS issues, etc.
            throw new ApiError(
                error instanceof Error ? error.message : 'Network error occurred',
                0,
                {originalError: error}
            );
        }
    }

    /**
     * Generic GET request
     */
    protected static async get<T>(endpoint: string): Promise<T> {
        return this.makeRequest<T>(endpoint, {method: 'GET'});
    }

    /**
     * Generic POST request
     */
    protected static async post<T>(endpoint: string, data?: any): Promise<T> {
        return this.makeRequest<T>(endpoint, {
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    /**
     * Generic PUT request
     */
    protected static async put<T>(endpoint: string, data?: any): Promise<T> {
        return this.makeRequest<T>(endpoint, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined,
        });
    }

    /**
     * Generic DELETE request
     */
    protected static async delete<T>(endpoint: string): Promise<T> {
        return this.makeRequest<T>(endpoint, {method: 'DELETE'});
    }
}

/**
 * Runner API Service - extends BaseApiService for runner-specific operations
 */
export class RunnerApiService extends BaseApiService {
    /**
     * Delete a runner using the API endpoint (matches CLI and Flutter pattern)
     */
    static async deleteRunner(runnerId: string): Promise<void> {
        if (!runnerId || typeof runnerId !== 'string') {
            throw new Error('Runner ID is required and must be a string');
        }

        try {
            await this.delete(`/runner/${runnerId}`);
        } catch (error) {
            if (error instanceof ApiError) {
                // Re-throw API errors with more context
                throw new ApiError(
                    `Failed to delete runner: ${error.message}`,
                    error.status,
                    error.response
                );
            }
            throw error;
        }
    }

    /**
     * Create a runner using the API endpoint
     */
    static async createRunner(data: {
        name: string;
        directory?: string;
        machineId?: string;
        machineName?: string;
    }): Promise<{ id: string }> {
        if (!data.name) {
            throw new Error('Runner name is required');
        }

        try {
            return await this.post('/runner', data);
        } catch (error) {
            if (error instanceof ApiError) {
                throw new ApiError(
                    `Failed to create runner: ${error.message}`,
                    error.status,
                    error.response
                );
            }
            throw error;
        }
    }

    /**
     * Update a runner's name using the API endpoint
     * Uses PUT /v1/runner/{runner_id} with "name" in request body (matches CLI pattern)
     */
    static async updateRunnerName(runnerId: string, name: string): Promise<void> {
        if (!runnerId) {
            throw new Error('Runner ID is required');
        }
        if (!name || typeof name !== 'string' || !name.trim()) {
            throw new Error('Runner name is required and must be a non-empty string');
        }

        try {
            await this.put(`/runner/${runnerId}`, {name: name.trim()});
        } catch (error) {
            if (error instanceof ApiError) {
                throw new ApiError(
                    `Failed to update runner name: ${error.message}`,
                    error.status,
                    error.response
                );
            }
            throw error;
        }
    }

    /**
     * Generic update runner method for other properties
     */
    static async updateRunner(runnerId: string, data: {
        name?: string;
        lastMessage?: string;
    }): Promise<void> {
        if (!runnerId) {
            throw new Error('Runner ID is required');
        }

        try {
            await this.put(`/runner/${runnerId}`, data);
        } catch (error) {
            if (error instanceof ApiError) {
                throw new ApiError(
                    `Failed to update runner: ${error.message}`,
                    error.status,
                    error.response
                );
            }
            throw error;
        }
    }
}

/**
 * Usage example:
 *
 * // Delete a runner
 * try {
 *   await RunnerApiService.deleteRunner('runner-id-123');
 *   console.log('Runner deleted successfully');
 * } catch (error) {
 *   if (error instanceof ApiError) {
 *     console.error(`API Error (${error.status}): ${error.message}`);
 *   } else {
 *     console.error('Unexpected error:', error);
 *   }
 * }
 *
 * // Create a new runner
 * try {
 *   const { id } = await RunnerApiService.createRunner({
 *     name: 'My New Runner',
 *     directory: '/path/to/project'
 *   });
 *   console.log('Created runner with ID:', id);
 * } catch (error) {
 *   console.error('Failed to create runner:', error);
 * }
 *
 * // Rename a runner
 * try {
 *   await RunnerApiService.updateRunnerName('runner-id-123', 'Updated Runner Name');
 *   console.log('Runner renamed successfully');
 * } catch (error) {
 *   if (error instanceof ApiError) {
 *     console.error(`Failed to rename runner: ${error.message}`);
 *   } else {
 *     console.error('Unexpected error:', error);
 *   }
 * }
 */
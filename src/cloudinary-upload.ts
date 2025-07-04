import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function uploads(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, {
                public_id,
                overwrite,
                invalidate,
                resource_type: 'auto' // upload .zip, images
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    resolve(error)
                };
                resolve(result);
            }
        );
    });
}

export function videoUpload(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
            file, {
                public_id,
                overwrite,
                invalidate,
                chunk_size: 50000, // 50MB
                resource_type: 'video' // upload video files
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (error) {
                    resolve(error)
                };
                resolve(result);
            }
        );
    });
}

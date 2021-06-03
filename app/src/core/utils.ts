export function textFile2DataURL(data: string, mimeType: string): string {
    const blob = new Blob([data], {type : mimeType});
    return URL.createObjectURL(blob);
}
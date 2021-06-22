export type CollectionBlockType = {
    [k: string]: {
        label: string;
        children?: CollectionBlockType;
    }
}

export const collectionBlocks: { 'blocks': CollectionBlockType } = {
    'blocks': {
        'opencv': {
            'label': 'OpenCV',
            'children': {
                'blur': { 'label': 'Blur' },
                'camera': { 'label': 'Camera' },
                'screen': { 'label': 'Screen' },
                'edgeDetector': {'label': 'Edge Detector'},
                'videoStreamer': {'label': 'Video Streamer'}
            }
        },
        'tensorflow': {
            'label': 'TensorFlow',
            'children': {
                'objectDetector': {'label': 'Object Detector'}
            }
        }
    }
}


export function getCollectionBlock(name: string) {

    switch (name) {
        case 'blocks.opencv.blur':
            return import('./opencv/Blur.json');
        case 'blocks.opencv.camera':
            return import('./opencv/Camera.json');
        case 'blocks.opencv.screen':
            return import('./opencv/Screen.json');
        case 'blocks.opencv.edgeDetector':
            return import('./opencv/EdgeDetector.json');
        case 'blocks.opencv.videoStreamer':
            return import('./opencv/VideoStreamer.json');
        case 'blocks.tensorflow.objectDetector':
            return import('./tensorflow/ObjectDetector.json');
        default:
            break;
    }
}
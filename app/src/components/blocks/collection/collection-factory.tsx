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
                'screen': { 'label': 'Screen' }
            }
        }
        // 'tensorflow': {
        //     'label': 'TensorFlow',
        //     'children': {
        //         'object': {
        //             'label': 'Object Detection',
        //             'children': {
        //                 'lane': { 'label': 'Lane Detection' }
        //             }
        //         }
        //     }
        // }
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
        default:
            break;
    }
}
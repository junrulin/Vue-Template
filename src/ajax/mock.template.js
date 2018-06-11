import {
    URL,
    getMatcher
} from './url-util';

let MockTemplate = {}

MockTemplate['example'] = {
    matcher: getMatcher('example'),
    method: 'post',
    template: {
        'message': 'Mock works!',
        'success': true
    }
}

export {
    MockTemplate
}
/**
 * 通用的工具库
 */
import { localStorage, sessionStorage, memoryStorage } from './storage';
import { addZero } from './helpers';

// 用户头像默认加载失败的图片
const avatarError = (e) => {
    e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNjRBRjMyOTdCMTFFN0I1OTZGMkRFNTM0MDBBNUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNjRBRjQyOTdCMTFFN0I1OTZGMkRFNTM0MDBBNUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2N0Y2NEFGMTI5N0IxMUU3QjU5NkYyREU1MzQwMEE1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2N0Y2NEFGMjI5N0IxMUU3QjU5NkYyREU1MzQwMEE1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkm31lAAAALtSURBVHja7JnZbtpAFIY9m228YkNL0uT936kXlapWUVUE2diMt+kPpGlCCNhjyyaVj7gg0gz+fPZzQr5++6l9BKHaB5EOtAPtQDvQDrSa8Hpel1Lfc23L5JzHSbJYrJarVRynhJwTqC7ExWjIGNv9aeg6PmHgJ0m6WC7XcZImKehbBoUuR58Hz5QvRQje973d9yRNp9N7qJmoKrmqj8LiMPfJY4JzaN1xbCllO6Cuaxc//GkQMMrUWCuBmqbBaIlfgN3D0M9zFdRKoAiaslcc2wKu1GSjoAiXsldACTvIvFlQSqmSHYTcSnOgaqmmBdNrsrmLXVPSgf7XoFJ+EFD0RAq38jxvGnQVRQq31utEodmrBBpFUVpSqShIy2ilkaaDidw/zEpdeJwt0D2RTXkijUb9bL6I46Swd8rx5JaCkZKGNbqR8WRapMPAmZtfv7MsQytDtDZAodHbu4fjZ9I0+/7jBtMpGm1KVQanGkDx2Nl8fiI/rKL1OmYYRBhVm+/qqkwnns0423gmJa1Noc/+lx9t2kG4fRf1hURttT6Xx+oN50yrVm9rAz0+jvKtVOi0awLFOHrS+TzPqdLE1APa992TZwZBHw7Q2qYEihyGgWX1Coys5PrLhW7oaqyKSzLBua4Lw9Ad2zq4IXsvpK4vR8ip26Vkso5TKfP6QRENtmX2TBN8ahP9Tno9E5+njjZJ0Ssul5uCUBUUxrVta7OlNY3a+3YhuBCO5zroAdDfPM7mWZaXBgWi59q+5xY3rnp2Y6zve3gWcO/uH99OAe+CIj7Cvq+wXaoYmtAu/B5dDrT7MuXxQy9Hh4PQ+utGLQycFAAB/G08nmTossmh9AQTXF2OWqT8F3OmcX11gaS2S2f7oGHgN+CRxR3Xd538LSjqtV0gdTcpcIB8u6KmexmO1PivoToEZYUSug+ql191NyAoMDD+a9Bmk1HR1szUpfZaoxgYzhBUF2Lf9JydJyjfNz3Gr3MEReRI+UeAAQA6cgV7TSGW7QAAAABJRU5ErkJggg==';
};

// 格式化时间
const formatDateToStr = (date, formatStr) => {
    formatStr = formatStr || 'yyyy-MM-dd';
    date = date || new Date();
    let str = formatStr;

    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
    str = str.replace(/MM/, addZero(date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth() + 1);
    str = str.replace(/dd|DD/, addZero(date.getDate()));
    str = str.replace(/d|D/g, date.getDate());
    str = str.replace(/hh|HH/, addZero(date.getHours()));
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, addZero(date.getMinutes()));
    str = str.replace(/m/g, date.getMinutes());
    str = str.replace(/ss|SS/, addZero(date.getSeconds()));
    str = str.replace(/s|S/g, date.getSeconds());
    return str;
};

export default {
    formatDateToStr,
    avatarError,
    localStorage,
    sessionStorage,
    memoryStorage
};

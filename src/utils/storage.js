const prefix = '_fm_';
const s = sessionStorage;
export const localStorage = {
    set (key, val) {
        try {
            window.localStorage.setItem(prefix + key, JSON.stringify(val));
        } catch (err) {
            alert('localStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = window.localStorage.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return window.localStorage.getItem(prefix + key);
        }
    },

    remove (key) {
        window.localStorage.removeItem(prefix + key);
    },

    clear () {
        window.localStorage.clear();
    },

    getAll () {
        const res = {};
        for (let i = window.localStorage.length - 1; i >= 0; i--) {
            let key = window.localStorage.key(i);
            if (key.startsWith(prefix)) {
                key = key.slice(prefix.length);
                res[key] = localStorage.get(key);
            }
        }
        return res;
    }
};

export const sessionStorage = {
    set (key, val) {
        try {
            window.sessionStorage.setItem(prefix + item, JSON.stringify(val));
        } catch (err) {
            alert('sessionStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = window.sessionStorage.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return window.sessionStorage.getItem(prefix + key);
        }
    },

    remove (key) {
        window.sessionStorage.removeItem(prefix + key);
    },

    clear () {
        window.sessionStorage.clear();
    },

    getAll () {
        const res = {};
        for (let i = window.sessionStorage.length - 1; i >= 0; i--) {
            let key = window.sessionStorage.key(i);
            if (key.startsWith(prefix)) {
                key = key.slice(prefix.length);
                res[key] = sessionStorage.get(key);
            }
        }
        return res;
    }
};

let _memoryStorage = {};
export const memoryStorage = {
    set (key, val) {
        _memoryStorage[prefix + key] = val;
    },

    get (key) {
        return _memoryStorage[prefix + key];
    },

    remove (key) {
        delete _memoryStorage[prefix + key];
    },

    clear () {
        _memoryStorage = {};
    },

    getAll () {
        return _memoryStorage;
    }
};

const prefix = '_fm_';
const { localStorage: l, sessionStorage: s } = window;

export const localStorage = {
    set (key, val) {
        try {
            l.setItem(prefix + key, JSON.stringify(val));
        } catch (err) {
            alert('localStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = l.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return l.getItem(prefix + key);
        }
    },

    remove (key) {
        l.removeItem(prefix + key);
    },

    clear () {
        l.clear();
    },

    getAll () {
        const res = {};
        for (let i = l.length - 1; i >= 0; i--) {
            let key = l.key(i);
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
            s.setItem(prefix + item, JSON.stringify(val));
        } catch (err) {
            alert('sessionStorage 写入出错');
        }
    },

    get (key) {
        try {
            const val = s.getItem(prefix + key);
            return JSON.parse(val);
        } catch (e) {
            return s.getItem(prefix + key);
        }
    },

    remove (key) {
        s.removeItem(prefix + key);
    },

    clear () {
        s.clear();
    },

    getAll () {
        const res = {};
        for (let i = s.length - 1; i >= 0; i--) {
            let key = s.key(i);
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

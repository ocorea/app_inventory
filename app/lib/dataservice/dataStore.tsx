import secureLocalStorage from 'react-secure-storage';


export class DataStore {
    public set(key: string, value: any) {
        secureLocalStorage.setItem(key, value);
    }

    public get(key: string) {
        return secureLocalStorage.getItem(key);
    }

    public remove(key: string) {
        secureLocalStorage.removeItem(key);
    }

    public clear() {
        secureLocalStorage.clear();
    }
}

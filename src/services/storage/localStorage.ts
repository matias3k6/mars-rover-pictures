import { StorageReturn } from './types';

const storage = (): StorageReturn => {
	const currentStorage = localStorage;

	const store = (keyName: string, value: string) => {
		try {
			currentStorage.setItem(keyName, value);
		} catch (error) {
			return error as Error;
		}
	};

	const read = (keyName: string) => {
		try {
			const readStorage = currentStorage.getItem(keyName);
			if (readStorage) return readStorage;
			else throw Error('Not found');
		} catch (error) {
			return error as Error;
		}
	};

	const remove = (keyName: string) => {
		try {
			currentStorage.removeItem(keyName);
		} catch (error) {
			return error as Error;
		}
	};

	const clear = () => {
		try {
			currentStorage.clear();
		} catch (error) {
			return error as Error;
		}
	};

	return {
		store,
		read,
		remove,
		clear,
	};
};

export default storage;

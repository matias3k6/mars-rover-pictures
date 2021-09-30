export interface StorageReturn {
	store: (keyName: string, value: string) => void;
	read: (keyName: string) => string | Error;
	remove: (keyName: string) => void;
	clear: () => void;
}

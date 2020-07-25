import { useCallback } from 'react';

export const useNotice = () => {
	return useCallback((text) => {
		if (window.M && text) {
			window.M.toast({ html: text });
		}
	}, []);
};

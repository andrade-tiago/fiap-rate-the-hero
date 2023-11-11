import useAxios from 'axios-hooks';

export function useHero(heroId) {
	const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`, 
        { manual: heroId == null }
    );

	return {
		hero,
		isLoadingHero,
	};
}
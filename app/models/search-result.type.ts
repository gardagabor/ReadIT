export interface SearchResult<T> {
    results: T[];
    page: number;
    pageSize: number;
    allResults: number;
    searchTerm: string;
}
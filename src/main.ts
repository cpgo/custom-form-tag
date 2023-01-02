import { SearchGroup } from "./search_group";
import { SearchInput } from "./search_input";

customElements.define('search-group', SearchGroup, { extends: 'form' });

customElements.define('search-input', SearchInput, { extends: 'input' });

window.SearchGroup = SearchGroup

import { createAction, props } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const loadCurrentWeather = createAction(
  '[Home] Carregar Tempo Atual',
  props<{ query: string }>(),
);

export const loadCurrentWeatherById = createAction(
  '[Home] Carregar Tempo por Id',
  props<{ id: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Tempo carregado com sucesso',
  props<{ entity: any }>(),
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Falha na carga do tempo',
);

export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{ entity: Bookmark }>(),
);

export const clearHomeState = createAction('[Home] Limpar');

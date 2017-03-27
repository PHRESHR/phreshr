//  This file was automatically generated and should not be edited.
/* tslint:disable */

export interface AllEpisodesQueryVariables {
  id: string | null;
}

export interface AllEpisodesQuery {
  allEpisodes: Array< EpisodeInfoFragment & {
    show: ShowInfoFragment & ShowEpisodesFragment,
  } >;
}

export interface AllShowsQueryVariables {
  id: string | null;
}

export interface AllShowsQuery {
  allShows: Array<ShowInfoFragment & ShowEpisodesFragment>;
}

export interface EpisodeQueryVariables {
  id: string | null;
}

export interface EpisodeQuery {
  Episode: EpisodeInfoFragment & {
    show: ShowInfoFragment & ShowEpisodesFragment,
  } | null;
}

export interface ShowQueryVariables {
  id: string | null;
}

export interface ShowQuery {
  Show: ShowInfoFragment & ShowEpisodesFragment;
}

export interface EpisodeInfoFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  thumbImageUrl: string;
  featureImageUrl: string | null;
  videoUrl: string;
  createdAt: String | null;
  topics: Array< {
    id: string,
    name: string,
  } > | null;
}

export interface ShowInfoFragment extends ShowEpisodesFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  posterImageUrl: string | null;
  featureImageUrl: string | null;
  season: number;
}

export interface ShowEpisodesFragment {
  episodes: Array< {
    id: string,
    uid: string | null,
    title: string,
    description: string,
    thumbImageUrl: string,
  } > | null;
}
/* tslint:enable */

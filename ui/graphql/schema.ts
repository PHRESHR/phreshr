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

export interface AllFeaturedsQuery {
  allFeatureds: Array<FeaturedInfoFragment>;
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

export interface FeaturedQueryVariables {
  id: string | null;
}

export interface FeaturedQuery {
  Featured: FeaturedInfoFragment;
}

export interface ShowQueryVariables {
  id: string | null;
}

export interface ShowQuery {
  Show: ShowInfoFragment & ShowEpisodesFragment;
}

export interface SignInMutationVariables {
  idToken: string;
}

export interface SignInMutation {
  signinUser: {
    token: string | null,
    user: CurrentUserObjectFragment,
  };
}

export interface CreateUserMutationVariables {
  idToken: string;
  name: string;
}

export interface CreateUserMutation {
  createUser: CurrentUserObjectFragment;
}

export interface CurrentUserQuery {
  user: CurrentUserObjectFragment;
}

export interface UserQueryVariables {
  auth0UserId: string | null;
}

export interface UserQuery {
  User: CurrentUserObjectFragment;
}

export interface EpisodeInfoFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  thumbImageUrl: string;
  imagePublicId: string | null;
  videoUrl: string;
  season: number;
  createdAt: String | null;
  topics: Array< {
    id: string,
    name: string,
  } > | null;
}

export interface FeaturedInfoFragment {
  id: string;
  episode: {
    id: string,
    uid: string | null,
    title: string,
    description: string,
    featureImageUrl: string | null,
    imagePublicId: string | null,
    season: number,
    show: {
      title: string,
    } | null,
  } | null;
}

export interface ShowInfoFragment extends ShowEpisodesFragment {
  id: string;
  uid: string | null;
  title: string;
  description: string;
  posterImageUrl: string | null;
  featureImageUrl: string | null;
}

export interface ShowEpisodesFragment {
  episodes: Array< {
    id: string,
    uid: string | null,
    title: string,
    description: string,
    thumbImageUrl: string,
    imagePublicId: string | null,
  } > | null;
}

export interface CurrentUserObjectFragment {
  id: string;
  name: string;
}
/* tslint:enable */

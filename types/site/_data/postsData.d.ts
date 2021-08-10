/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

declare global {
  export interface AuthorsItem extends VirtualCollectionItem, AuthorsDataItem {
    data?: VirtualDataField;
  }

  export interface Authors {
    [key: string]: AuthorsItem;
  }

  export interface FrontMatterData {
    title?: string | number;
    layout?: string;
    description?: string;
    subhead?: string;
    date?: Date;
    updated?: Date;
    authors?: string[];
    tags?: string[];
    hero?: string;
    alt?: string;
    origin_trial?: {
      url: string;
    };
    permalink?: string;
    type?: string;
    i18n?: {
      [key: string]: TODO;
    };
    pagination?: {
      data: TODO;
      size: number;
      alias?: string;
      resolve?: string;
    };
    draft?: boolean;
    api?: string;
    extra_permissions?: string[];
    extra_permissions_html?: string;
  }

  export interface FrontMatterDataCollection {
    [url: string]: FrontMatterData;
  }

  export interface PostsData {
    authors: Authors;
  }
}

// empty export to keep file a module
export {};

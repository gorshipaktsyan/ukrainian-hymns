import { subtitles } from '../storage';

import hymnsService from './hymnsService';

class SubtitlesService {
  get() {
    return subtitles;
  }
  filterSubsByTitleId(titleId) {
    //{
    //  "_id": 8,
    //    "name": "СОЮЗ ІЗ ХРИСТОМ"
    //},

    //{
    //    "_id": 135,
    //    "title": 8,
    //    "name": "Єдність з Ним",
    //    "name_upper": "ЄДНІСТЬ З НИМ"
    //  }
    const hymns = hymnsService.get();
    return subtitles.filter((subtitle) => {
      return hymns.some(
        (hymn) => hymn.isUkrainian && hymn.title === titleId && hymn.subtitle === subtitle._id
      );
    });
  }
}

const subtitlesService = new SubtitlesService();

export default subtitlesService;

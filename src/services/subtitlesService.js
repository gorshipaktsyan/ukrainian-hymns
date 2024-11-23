import { subtitles } from '../storage';

class SubtitlesService {
  get() {
    return subtitles;
  }
  filterSubsByTitleId(titleId) {
    return subtitles.filter((sub) => sub.title === titleId);
  }
}

const subtitlesService = new SubtitlesService();

export default subtitlesService;

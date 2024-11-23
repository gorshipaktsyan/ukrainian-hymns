import { titles } from '../storage';

class TitlesService {
  get() {
    return titles;
  }
}

const titlesService = new TitlesService();

export default titlesService;

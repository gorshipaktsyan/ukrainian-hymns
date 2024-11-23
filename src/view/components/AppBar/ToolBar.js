import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Bookmark, BookmarkBorder, Menu } from '@mui/icons-material/';
import { Box, IconButton, Toolbar } from '@mui/material';

import { setIsSaved } from '../../../redux/slice/appBarSlice';
import { removeHymn, saveHymn } from '../../../redux/slice/bookmarksSlice';
import { setIsDrawerOpen } from '../../../redux/slice/drawerSlice';
import {
  copyToClipboard,
  formatDataForBookmarks,
  setDataForBookmarks,
  showBookmark
} from '../../../utils';
import SearchBar from '../SearchBar';

export default function ToolBar({ setCopyAlert }) {
  const { currentNumber } = useSelector((state) => state.currentNumber);
  const { isDrawerOpen } = useSelector((state) => state.drawer);
  const { foundHymns } = useSelector((store) => store.search);
  const { title, isSaved } = useSelector((state) => state.appBar);
  const { savedHymns } = useSelector((state) => state.bookmarks);
  const { language } = useSelector((state) => state.settings);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const currentHymnNumber = currentNumber.length < 2 ? currentNumber[0] : null;

  useEffect(() => {
    const formattedData = formatDataForBookmarks({ savedHymns, language });
    const isBookmarked = showBookmark({
      formattedData,
      currentHymnNumber
    });
    dispatch(setIsSaved(isBookmarked));
  }, [currentHymnNumber, savedHymns, dispatch, language]);

  function handleBookmarkClick() {
    if (isSaved) {
      dispatch(removeHymn(currentHymnNumber));
      dispatch(setIsSaved(false));
    } else {
      const hymnObject = setDataForBookmarks(currentHymnNumber);
      dispatch(saveHymn(hymnObject));
      dispatch(setIsSaved(true));
    }
  }

  function handleTitleClick() {
    if (pathname.includes(`/hymns`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  }

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(setIsDrawerOpen(!isDrawerOpen))}>
        <Menu sx={{ fontSize: '30px' }} />
      </IconButton>
      <Box
        sx={{
          fontSize: '20px',
          cursor: pathname.includes(`/hymns`) ? 'pointer' : 'default'
        }}
        dangerouslySetInnerHTML={{ __html: title }}
        onClick={handleTitleClick}
      />
      <Box
        sx={{
          flexGrow: '1'
        }}>
        {(pathname !== '/' || !!foundHymns.length) && <SearchBar dispatch={dispatch} />}
      </Box>
      {pathname.includes(`/hymns`) && (
        <>
          <IconButton color="inherit" onClick={handleBookmarkClick}>
            {currentHymnNumber &&
              (isSaved ? (
                <Bookmark sx={{ fontSize: '30px' }} />
              ) : (
                <BookmarkBorder sx={{ fontSize: '30px' }} />
              ))}
          </IconButton>
        </>
      )}
    </Toolbar>
  );
}

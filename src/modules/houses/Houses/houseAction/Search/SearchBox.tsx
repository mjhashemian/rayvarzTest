import { FormControl, InputAdornment, TextField } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBox: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState<string>('none');
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex');
    setSearchValue(event.target.value);
  };

  const handleClick = (): void => {
    setSearchValue('');
  };

  return (
    <FormControl className="bg-[#cecece]">
      <TextField
        size="small"
        onChange={handleChange}
        value={searchValue}
        placeholder="Search for a house"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClick}
            >
              <ClearIcon className="cursor-pointer" />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchBox;

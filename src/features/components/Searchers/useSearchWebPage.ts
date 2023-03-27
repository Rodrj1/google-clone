'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useSearchWebPage = () => {
  const currentlySearching = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [text, setText] = useState(searchTerm || '');

  type submitEvent = React.FormEvent<HTMLFormElement>;
  type onChangeEvent = React.ChangeEvent<HTMLInputElement>;

  const handleOnSubmit = (e: submitEvent) => {
    e.preventDefault();
    if (text == '') return;
    else
      router.push(
        `/search/${
          currentlySearching == '/search/image' ? 'image' : 'web'
        }?searchTerm=${text}`
      );
  };

  const handleOnChange = (e: onChangeEvent) => {
    setText(e.target.value);
  };

  const deleteSearch = () => {
    setText('');
  };
  return { text, handleOnSubmit, handleOnChange, deleteSearch };
};

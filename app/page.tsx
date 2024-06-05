'use client';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import React, { useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { login, logout } from '@/src/store/slices/userSlice';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import Chat from '@/src/components/Chat/Chat';
import Login from '@/src/components/Login/login';

export default function Home() {
  const user = useAppSelector((state) => state.user.user);
  console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.displayName,
            displayName: loginUser.displayName,
          }),
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return user ? (
    <div className={'flex flex-row text-white'}>
      <Sidebar />
      <main className={'w-screen'}>
        <Chat />
      </main>
    </div>
  ) : (
    <Login />
  );
}

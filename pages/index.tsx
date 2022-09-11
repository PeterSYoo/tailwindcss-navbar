import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SideBar from './sideBar.component';

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
    </div>
  );
};

export default Home;

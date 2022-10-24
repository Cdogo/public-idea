import Idea from '../components/idea'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Idea 
        id = '1' 
        tags = {["1", "2", "3"]}
        title = 'An App where people can share their ideas!' 
        content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Sit amet cursus sit amet dictum sit. At auctor urna nunc id cursus metus aliquam. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet porttitor eget dolor morbi non. In nibh mauris cursus mattis molestie a iaculis. Velit scelerisque in dictum non consectetur a. Ultricies mi quis hendrerit dolor magna eget est. Netus et malesuada fames ac turpis egestas sed tempus urna.'
        timeCreated={new Date()}
        />
      <Idea 
        id = '1' 
        tags = {["1", "2", "3"]}
        title = 'An App where people can share their ideas!' 
        content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Sit amet cursus sit amet dictum sit. At auctor urna nunc id cursus metus aliquam. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet porttitor eget dolor morbi non. In nibh mauris cursus mattis molestie a iaculis. Velit scelerisque in dictum non consectetur a. Ultricies mi quis hendrerit dolor magna eget est. Netus et malesuada fames ac turpis egestas sed tempus urna.'
        timeCreated={new Date()}
        />
    </div>
  )
}

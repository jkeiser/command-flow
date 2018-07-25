import React, {Component} from 'react'
import Command from './components/Command/'

import ElectronImg from './assets/electron.png'
import ReactImg from './assets/react.png'
import WebpackImg from './assets/webpack.png'

const logos = [
    ElectronImg,
    ReactImg,
    WebpackImg
]


export default class App extends Component {
    render() {
        return (
            <div>
                <Command commandline="ls -l /" directory="/home/jkeiser/blah" exitCode={0} output={[
      { timestamp: Date.now(), data: "/hello.txt\n" },
      { timestamp: Date.now(), data: "/hello.csv\n" },
      { stream: "stderr", timestap: Date.now(), data: "/: no such directory. Perhaps you deleted your hard drive?\n"}
    ]} />
            </div>
        )
    }
}

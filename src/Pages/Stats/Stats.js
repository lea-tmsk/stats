import React from 'react'
import { BarChart } from '../../BarChart/BarChart'
import { DownloadButton } from '../../DownloadButton/DownloadButton'
import { Loading } from '../../Loading/Loading'
import './Stats.css'


export const Stats = () => {
  return (
    <div>
      <Loading text="Загрузка" loaded={true}/>
      <div className="Back">
        <div className="ArrowFrame">
          <div className="Arrow"></div>
        </div>
        <a href="/"></a>
      </div>
      <div className="Bar">
        <BarChart title="Статистика"/>
      </div>
      <div className="Download">
        <DownloadButton from="2019-12-12" to="2020-02-02" date="2019-12-12 2020-02-02" text="Скачать"/>
      </div>
    </div>
  )
}

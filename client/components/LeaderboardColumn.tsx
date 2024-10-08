import { Link } from 'react-router-dom'

import {
  LeaderboardLoss,
  LeaderboardRatio,
  LeaderboardWin,
} from '@models/leaderboard'

interface Props {
  column: LeaderboardRatio[] | LeaderboardWin[] | LeaderboardLoss[]
  dataType: 'ratio' | 'wins' | 'losses'
  description: string
}

export default function LeaderboardColumn({
  column,
  dataType,
  description,
}: Props) {
  return (
    <ul>
      {column.map((item) => (
        <Link
          data-testid={`link-for-testing-${item.id}`}
          key={item.id}
          to={`/pets/${item.id}`}
        >
          <li className="-my-0.5 border-solid border-border border-2 pt-3 pb-3 pl-3 rounded-sm">
            <p className="font-bold m-0 text-xl">{item.name}</p>
            <p>
              {dataType === 'ratio'
                ? item[dataType].toFixed(3)
                : item[dataType]}{' '}
              {description}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  )
}

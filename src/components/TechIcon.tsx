import { Button, Tooltip } from '@material-tailwind/react'
import { TechListProps } from '../utils/TechList'

export const TechIcon = ({name, icon}: TechListProps) => {
  return (
    <Tooltip content={name} className="bg-secondary hover:shadow-none">
        <Button placeholder={"icon"} ripple={false} className="bg-secondary hover:shadow-none">
            {icon}
        </Button>
    </Tooltip>
  )
}

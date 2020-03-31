import { Card, Typography } from '@material-ui/core';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';

export default function ProjectItem() {
  return (
    <Card>
      <div className="cardbox-header">
        <Typography className="project-text" color="textSecondary" gutterBottom>
          <FolderOutlinedIcon />
          <span>Project</span>
        </Typography>
      </div>
    </Card>
  );
}

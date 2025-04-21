// material-ui
import { Typography } from '@mui/material';
import MainCard from 'components/MainCard';

const SamplePage = () => {
  return (
    <MainCard title="Albums">
      <Typography variant="body2">
        Albums App is a full-stack web application built using Spring Boot and React. It allows users to manage personal photo albums with
        features like creating albums, uploading photos, editing or deleting them, and even downloading photos.
      </Typography>
    </MainCard>
  );
};

export default SamplePage;

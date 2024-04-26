import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        h1 heading
      </Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1" gutterBottom>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam
        temporibus dolore quia cumque similique cum beatae, alias vero dolorum,
        impedit consequatur deleniti maxime consectetur modi, officia sint porro
        minima!
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam
        temporibus dolore quia cumque similique cum beatae, alias vero dolorum,
        impedit consequatur deleniti maxime consectetur modi, officia sint porro
        minima!
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </>
  );
}

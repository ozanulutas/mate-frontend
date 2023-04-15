import { Card, CardContent, CardProps, Typography } from "@mui/material";

type LabeledSectionProps = {
  children: React.ReactElement;
  label: string;
} & CardProps;

function LabeledSection({ children, label, ...props }: LabeledSectionProps) {
  return (
    <Card
      variant="outlined"
      component="section"
      sx={{ position: "relative", overflow: "visible", marginTop: "17px" }}
      {...props}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{
          position: "absolute",
          top: 0,
          transform: "translateY(-56%)",
          backgroundColor: "inherit",
          padding: "0 6px",
          margin: "0 10px",
        }}
      >
        {label}
      </Typography>

      <CardContent
        sx={{ paddingTop: "24px", "&:last-child": { paddingBottom: "16px" } }}
      >
        {children}
      </CardContent>
    </Card>
  );
}

export default LabeledSection;

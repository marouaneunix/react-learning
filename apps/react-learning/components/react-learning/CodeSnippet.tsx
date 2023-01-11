import { Prism, PrismProps } from '@mantine/prism';
import { createStyles } from '@mantine/styles';




const useStyles = createStyles((theme, _params, getRef) => ({
  child: {
    // assign ref to element
    ref: getRef('child'),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));


interface CodeSnippetProps extends PrismProps {
  title?: string;
  hig?: Record<"added" | "deleted", Array<number>>
}

export const CodeSnippet = ({ title, hig, children, ...others }: CodeSnippetProps) => {
  const { classes } = useStyles();


  const buildHighlightLines = () => {
    const highlightLines = {};
    if (!hig) {
      return highlightLines;
    }
    hig.added.forEach(element => {
      highlightLines[element] = { color: 'green', label: '+' }
    });
    return highlightLines;
  }



  return (
    <>
      <h3>{title}</h3>
      <div className={classes.child}>
        <Prism highlightLines={buildHighlightLines()} {...others}>{children}</Prism>
      </div>
    </>
  )
}


export default CodeSnippet;
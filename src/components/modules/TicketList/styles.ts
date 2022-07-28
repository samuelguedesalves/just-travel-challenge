import { styled } from "../../../styles/stitches.config";

export const SearchSection = styled("header", {
  width: "$full",
  paddingBlock: 36,

  borderBottomWidth: 2,
  borderBottomStyle: "solid",
  borderBottomColor: "$gray10",

  ".content": {
    width: "$full",
    maxWidth: "$container-width",

    paddingInline: "$container-inline-padding",
    marginInline: "auto",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ".content .view-mode": {
    display: "flex",
    columnGap: 10,
  },
});

export const ViewModeButton = styled("button", {
  width: 48,
  height: 48,

  padding: 10,
  background: "$white",

  variants: {
    type: {
      actived: {
        borderWidth: 1,
        borderColor: "$blue",
        borderStyle: "solid",
        color: "$blue",
        borderRadius: 2,
      },
      unactived: {
        borderWidth: 1,
        borderColor: "$gray30",
        borderStyle: "solid",
        color: "$gray30",
        borderRadius: 2,

        transition: "border-color ease 0.5s",

        "&:hover": {
          borderColor: "$blue",
        }
      }
    }
  },
  defaultVariants: {
    type: "actived"
  }
});

export const MainSection = styled("main", {
  width: "$full",
  background: "$gray10",

  ".content": {
    width: "$full",
    maxWidth: "$container-width",
    marginInline: "auto",
    paddingBlock: 36,
    paddingInline: "$container-inline-padding",

    display: "grid",
    gridTemplateColumns: "408px 1fr",
    columnGap: 24,
  },
    
  ".content .ticket-listage .ticket-card": {
    marginBottom: 14,
    
    "&::last-child": {
      marginBottom: 0,
    }
  },
})
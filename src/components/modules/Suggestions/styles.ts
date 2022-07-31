import { styled } from "../../../styles/stitches.config";

export const BannerContainer = styled("div", {
  width: "$full",
  height: "$full",
  background: "$blue",
  
  "& .banner-content": {
    width: "$full",
    height: "$full",
    maxWidth: "$container-width",
  
    marginInline: "auto",
    paddingInline: "$container-inline-padding",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  "& .banner-content .left-content": {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  "& .banner-content .left-content .planet-figure": {
    objectFit: "cover",
    objectPosition: "center",
  },
  
  "& .banner-content .left-content p.banner-text": {
    color: "$white",
    fontFamily: "$circularStd",
    fontSize: "$header3",
    whiteSpace: "pre-line",
    marginLeft: 24,
  },

  "& .banner-content .right-content": {
    diplay: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CitiesListContainer = styled("div", {
  width: "$full",
  height: "fit-content",
  background: "$gray10",
  
  "& .cities-content": {
    width: "$full",
    maxWidth: "$container-width",
  
    marginInline: "auto",
    paddingBlock: 78,
    paddingInline: "$container-inline-padding",
  },

  "& .cities-content h1.title": {
    fontFamily: "$circularStd",
    fontWeight: "$bold",
    fontSize: "$header1",
    lineHeight: "$header1",
    color: "$black",
    marginBottom: 17,
  },
  
  "& .cities-content p.subtitle": {
    fontFamily: "$circularStd",
    fontWeight: "$normal",
    fontSize: "$paragraph1",
    lineHeight: "$paragraph1",
    color: "$gray70",
    marginBottom: 35,
  },
  
  "& .cities-content ul.list": {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    padding: 0,
  },
  
  "& .cities-content .list li.card": {
    width: 234,
    height: 320,
    background: "$white",
    marginInline: 10,
  },
  
  "& .cities-content .list li.card:first-child": {
    marginLeft: 0,
  },
  
  "& .cities-content .list li.card:last-child": {
    marginRight: 0,
  },
  
  "& .cities-content .list .card img": {
    width: 234,
    height: 242,
    objectFit: "cover",
    objectPosition: "center",
  },
  
  "& .cities-content .list .card span": {
    display: "block",
    color: "$black",
    fontWeight: "$medium",
    fontSize: "$header3",
    lineHeight: "$header3",
    textAlign: "center",
    marginTop: 24,
  },
});
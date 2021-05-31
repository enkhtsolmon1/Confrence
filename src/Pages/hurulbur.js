import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <>
      <Grid
        style={{ textAlign: "justify" }}
        container
        justify="flex-start"
        spacing={3}
      >
        <Grid
          style={{ color: "#013a91", textTransform: "uppercase" }}
          item
          xs={12}
        >
          <Typography
            className={classes.paper1}
            variant="h4"
            component="h2"
            gutterBottom
          >
            Хурлын удирдамж
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Зорилго
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            Сургалтын технологийн өөрчлөлт, цахим сургалтын технологи, арга
            хэлбэрийг боловсронгуй болгох ололт, туршлага, үр дүнг хэлэлцэх,
            нийтэд түгээх
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Оролцогчид
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            Эрдэм шинжилгээний хуралд Ховд их сургууль болон баруун бүсийн ЕБС,
            МСҮТ-ийн багш нар оролцоно.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Хугацаа
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2021 оны 05 дугаар сарын 17-нд 09.00a.m. UTC+7 онлайн хэлбэрээр
            зохион байгуулна.
          </Typography>
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Бүртгэл
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2021 оны 5 сарын 1-нээс 15-ны хооронд онлайнаар хийгдэнэ. Ховд их
            сургуулийн фэйж хуудаст гарах зараар бүртгүүлнэ.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Илтгэлийн сэдвийн хамрах хүрээ
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            <li> Цахим сургалтын онол-практикийн асуудал; </li>
            <li> Цахим сургалтын туршилт, судалгаа, туршлага</li>
            <li> Цахим сургалтын олон улсын чиг хандлага, харьцуулалт</li>
            <li> Цахим сургалтын үеийн үнэлгээний хэлбэр, загварууд </li>
            <li> Цахим сургалтын дидактикийн асуудлууд</li>
            <li> Сургалтын хөтөлбөрийн хэрэгжилт, үр дүн</li>
            <li>
              {" "}
              Цахим сургалтын үеийн менежмент удирдлага зохион байгуулалт
            </li>
            <li> Цахим сургалтыг хэрэгжүүлэх орчин, багшийн ачаалал</li>
            <li>
              Цахим сургалтын үеийн багш, суралцагчдын эрүүл ахуй дахь эерэг,
              сөрөг нөлөөлөл.
            </li>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1">
            Илтгэлд тавигдах шаардлага
          </Typography>

          <Typography style={{ marginLeft: 40 }}>
            <li>
              Сэдэв нь тухайн асуудлаар шийдэл хүлээсэн, нийтлэг ач холбогдолтой
              байх
            </li>
            <li>
              Тухайн асуудлаар онол, практикийн өргөн дүн шинжилгээ хийж, бүтэц,
              эшлэл зүүлт, ном зүйг APA (American Psychological Association)
              загварыг баримтлан бичих
            </li>
            <li>
              Судалгааны зорилго, зорилт, арга, арга зүй, боловсруулалт, үр дүнг
              тодорхой гаргаж, судалгаа туршилтын баримтанд тулгуурлах
            </li>
            <li>Шинэлэг санаа, зөвлөмж, инноваци санал болгох </li>
            <li>
              Дүгнэлт нь судалгаа туршилтын баримтад тулгуурлаж, дэвшүүлсэн
              зорилготой уялдаж байх
            </li>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ textAlign: "center", color: "#000" }}
            variant="h5"
            component="h2"
            gutterBottom
          >
            ШАГНАЛ УРАМШУУЛАЛ
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1">
              Тэргүүн байр 1
            </Typography>
            <Typography style={{ marginLeft: 40 }}>
              Өргөмжлөл, мөнгөн шагнал, номын багц
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1">
              Дэд байр 1
            </Typography>
            <Typography style={{ marginLeft: 40 }}>
              Өргөмжлөл, мөнгөн шагнал, номын багц
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1">
              Гутгаар байр 1
            </Typography>
            <Typography style={{ marginLeft: 40 }}>
              Өргөмжлөл, мөнгөн шагнал, номын багц
            </Typography>
          </Grid>
          <Grid style={{ marginBottom: 20 }} item xs={12}>
            <Typography variant="h6" component="h1">
              Тусгай байр 3
            </Typography>
            <Typography style={{ marginLeft: 40 }}>
              Өргөмжлөл, номын багц
            </Typography>
          </Grid>
        </Grid>{" "}
      </Grid>
    </>
  );
}

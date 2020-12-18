const logger = require('../../../../config/utils/logger')
const db = require('../../../../config/databases/postgre')
const comRes = require('../../../../config/utils/commonResponse');
class movies {

  async listMovies(payload) {

    let search = '';
    let filterDate = '';
    let both = '';
    if(payload.search&&payload.startDate&&payload.endDate) {
both = `WHERE title ILIKE '${payload.search}%' AND "showTime" BETWEEN '${payload.startDate}' AND '${payload.endDate}' ORDER BY "showTime" ASC`
    }
    else {
        search = payload.search ? `WHERE title ILIKE '%${payload.search}%'` : '';

        filterDate = (payload.startDate&&payload.endDate) ? 
        `WHERE "showTime" BETWEEN '${payload.startDate}' AND '${payload.endDate}' ORDER BY "showTime" ASC` : '';
    }
  

    try {
    const result = await db.query(`SELECT * FROM public.movies ${search} ${filterDate} ${both}`);
    logger.log('info', 'get list movies');

    return comRes.success(200 , result.rows,'Succes Get List Movies')

    } catch (error) {
      logger.log('error', error);

          console.log(error);
          return comRes.error(404 , 'Data Not Found')
    }
    
      
  }

  async detailMovies(params) {

    try {
    const result = await db.query(`SELECT * FROM public.movies WHERE id ='${params.id}'`);
    logger.log('info', 'get detail movies');

    return comRes.success(200 , result.rows[0],'Succes Get Detail Movies')

    } catch (error) {
      logger.log('error', error);

          console.log(error);
          return comRes.error(404 , 'Data Not Found')
    }
    
      
  }

}

module.exports = movies;
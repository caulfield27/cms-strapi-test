
module.exports = async (ctx, next) => {
  console.log('alisher: ' , ctx);
  
  if (ctx.state.user) {
    return next();
  }

  ctx.status = 403;
  ctx.body = { message: 'You must be logged in to access this resource' };
  };
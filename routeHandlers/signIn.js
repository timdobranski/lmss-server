const supabase = require('../supabase');

const signInHandler = async (req, res) => {
  const { email, password } = req.body;
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password
  });
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ user, session });
}

module.exports.signInHandler = signInHandler;
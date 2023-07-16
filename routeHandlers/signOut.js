const supabase = require('../supabase');

const signOutHandler = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json({ message: 'Signed out successfully' });
}

module.exports.signOutHandler = signOutHandler;
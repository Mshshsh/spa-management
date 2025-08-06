import React, { useState } from 'react';
import { 
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Avatar,
  Paper,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Grid,
  Switch,
  FormGroup,
  CircularProgress,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import { 
  Visibility,
  VisibilityOff,
  Person as PersonIcon,
  Brightness4,
  Brightness7,
  Schedule,
  Analytics,
  Security,
  People,
  Spa,
  Star,
  TrendingUp
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
        }
      : {
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
});

const DynamicBackground = ({ darkMode }) => {
  const lightGradient = 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)';
  const darkGradient = 'linear-gradient(-45deg, #2c3e50, #3498db, #9b59b6, #e74c3c)';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: darkMode ? darkGradient : lightGradient,
        backgroundSize: '400% 400%',
        animation: 'gradient 20s ease infinite',
        '@keyframes gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        transition: 'background 0.5s ease',
      }}
    />
  );
};

const FeatureCard = ({ icon, title, description, darkMode }) => (
  <Card 
    sx={{ 
      mb: 1.5, 
      backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)'}`,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: darkMode ? '0 6px 24px rgba(144, 202, 249, 0.3)' : '0 6px 24px rgba(25, 118, 210, 0.3)',
      }
    }}
  >
    <CardContent sx={{ display: 'flex', alignItems: 'center', p: 1.5 }}>
      <Box sx={{ mr: 1.5, color: 'primary.main', flexShrink: 0 }}>
        {React.cloneElement(icon, { sx: { fontSize: 24 } })}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="subtitle1" sx={{ 
          color: darkMode ? '#fff' : '#333', 
          fontWeight: 600,
          fontSize: '0.95rem',
          lineHeight: 1.2,
          mb: 0.5
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
          fontSize: '0.8rem',
          lineHeight: 1.3
        }}>
          {description}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  document.title = 'Algentem Spa Yönetim';
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const theme = createTheme(getDesignTokens(darkMode ? 'dark' : 'light'));

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: '',
      password: ''
    };

    if (!username) {
      newErrors.username = 'Kullanıcı adı gereklidir';
      valid = false;
    } else if (username.length < 3) {
      newErrors.username = 'Kullanıcı adı en az 3 karakter olmalıdır';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Şifre gereklidir';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Simulated login process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo için başarılı giriş simülasyonu
      if (username === 'admin' && password === 'admin123') {
        if (rememberMe) {
          console.log('Remember me enabled');
        }
        
        // Dashboard'a yönlendir - simülasyon
        navigate('/dashboard');
        
      } else {
        throw new Error('Geçersiz kullanıcı adı veya şifre');
      }
      
    } catch (err) {
      setError(err.message || 'Giriş sırasında bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DynamicBackground darkMode={darkMode} />
      
      {/* Dark Mode Toggle */}
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={toggleDarkMode} size="small" />
            }
            label={darkMode ? <Brightness7 sx={{ color: '#fff', fontSize: 20 }} /> : <Brightness4 sx={{ color: '#333', fontSize: 20 }} />}
          />
        </FormGroup>
      </Box>

      <Container maxWidth={false} disableGutters sx={{ 
        height: '100vh', 
        display: 'flex',
        overflow: 'hidden'
      }}>
        {/* Sol Taraf - Bilgilendirme */}
        <Box sx={{ 
          width: { xs: '100%', md: '50%' }, 
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center', 
          justifyContent: 'center',
          p: { md: 3, lg: 4 },
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            maxWidth: 480, 
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '3px',
            },
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Spa sx={{ fontSize: 36, color: darkMode ? '#90caf9' : '#fff', mr: 1.5 }} />
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: darkMode ? '#fff' : '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontSize: { md: '2.5rem', lg: '3rem' },
                lineHeight: 1.1
              }}>
                Algentem Spa
              </Typography>
            </Box>
            
            <Typography variant="h5" sx={{ 
              mb: 2.5, 
              color: darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.95)',
              fontWeight: 300,
              lineHeight: 1.3,
              fontSize: { md: '1.4rem', lg: '1.6rem' }
            }}>
              Modern Spa Yönetim Sistemi ile işletmenizi dijitalleştirin
            </Typography>

            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
              lineHeight: 1.5,
              fontSize: '1rem'
            }}>
              Müşteri yönetiminden randevu planlamasına, finansal raporlamadan personel takibine kadar 
              tüm spa operasyonlarınızı tek platformda yönetin.
            </Typography>

            <FeatureCard
              icon={<Schedule />}
              title="Akıllı Randevu Sistemi"
              description="Online randevu alma, otomatik hatırlatmalar ve dinamik takvim yönetimi"
              darkMode={darkMode}
            />

            <FeatureCard
              icon={<People />}
              title="Müşteri Yönetimi"
              description="Detaylı müşteri profilleri, tercihleri ve geçmiş hizmet kayıtları"
              darkMode={darkMode}
            />

            <FeatureCard
              icon={<Analytics />}
              title="Gelişmiş Raporlama"
              description="Gerçek zamanlı analitik ve performans raporları"
              darkMode={darkMode}
            />

            <FeatureCard
              icon={<Security />}
              title="Güvenli Altyapı"
              description="Bank seviyesi güvenlik ve veri şifreleme"
              darkMode={darkMode}
            />

            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', mr: 1.5, mb: 0.5 }}>
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} sx={{ color: '#ffd700', fontSize: 18 }} />
                ))}
              </Box>
              <Typography variant="body2" sx={{ 
                color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.8)',
                mr: 1.5,
                mb: 0.5,
                fontSize: '0.9rem'
              }}>
                500+ Mutlu Müşteri
              </Typography>
              <TrendingUp sx={{ color: '#4caf50', fontSize: 20 }} />
            </Box>
          </Box>
        </Box>

        {/* Sağ Taraf - Giriş Formu */}
        <Box sx={{ 
          width: { xs: '100%', md: '50%' }, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          p: { xs: 2, sm: 3, md: 4 },
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh'
        }}>
          <Paper 
            elevation={24} 
            sx={{ 
              padding: { xs: 3, sm: 4 }, 
              maxWidth: 400, 
              width: '100%',
              backgroundColor: darkMode ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 3,
              border: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              maxHeight: '90vh',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.1)',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '3px',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Avatar sx={{ 
                bgcolor: 'primary.main', 
                width: 56, 
                height: 56,
                boxShadow: '0 4px 20px rgba(25, 118, 210, 0.4)'
              }}>
                <PersonIcon sx={{ fontSize: 28 }} />
              </Avatar>
            </Box>
            
            <Typography component="h1" variant="h4" align="center" sx={{ 
              mb: 1, 
              fontWeight: 600,
              color: darkMode ? '#fff' : '#333',
              fontSize: { xs: '1.8rem', sm: '2.125rem' }
            }}>
              Giriş Yap
            </Typography>
            
            <Typography variant="body2" align="center" sx={{ 
              mb: 2, 
              color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
              fontSize: '0.9rem'
            }}>
              Yönetim paneline erişmek için lütfen bilgilerinizi girin
            </Typography>
            
            {error && (
              <Alert severity="error" sx={{ mb: 2, fontSize: '0.875rem' }}>
                {error}
              </Alert>
            )}
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Kullanıcı Adı"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1.5 }}
                size="medium"
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Şifre"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1.5 }}
                size="medium"
              />
              
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    size="small"
                  />
                }
                label={<Typography variant="body2">Beni Hatırla</Typography>}
                sx={{ mt: 0.5, mb: 1.5 }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 1, 
                  mb: 2, 
                  py: 1.2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: '0 4px 15px rgba(25, 118, 210, 0.4)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.6)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease'
                }}
                disabled={loading}
              >
                {loading ? (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                    Giriş Yapılıyor...
                  </Box>
                ) : (
                  'Giriş Yap'
                )}
              </Button>

              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 1.5, 
                  mt: 1.5, 
                  textAlign: 'center',
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                }}
              >
                <Typography variant="caption" display="block" gutterBottom sx={{ fontSize: '0.75rem' }}>
                  Demo Bilgileri:
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                  <strong>Kullanıcı:</strong> admin
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                  <strong>Şifre:</strong> admin123
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
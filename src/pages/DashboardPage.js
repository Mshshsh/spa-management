import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
  Grid,
  Card,
  CardContent,
  Switch,
  FormGroup,
  FormControlLabel,
  keyframes,
  styled,
  CircularProgress,
  Skeleton,
  LinearProgress,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  AlertTitle,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Tabs,
  Tab
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  PointOfSale as PaymentIcon,
  Spa as SpaIcon,
  Schedule as AppointmentIcon,
  Groups as ClientsIcon,
  LocalOffer as PackagesIcon,
  People as TherapistIcon,
  Inventory as ProductsIcon,
  HotTub as ReportsIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  AccountCircle as AccountIcon,
  Brightness4,
  Brightness7,
  MonetizationOn,
  TrendingUp,
  TrendingDown,
  Add,
  Edit,
  Delete,
  Visibility,
  AccessTime,
  Person,
  Star,
  LocalHospital,
  FitnessCenter,
  Pool,
  HotTub,
  Add as AddIcon,
  Schedule,
  Inventory,
  Assessment,
  FileDownload,
  Settings,
  ContactPhone,
  Notifications,
  Security,
  Storage,
  Build,
  Backup,
  CleaningServices,
  Refresh,
  Download,
  Update
} from '@mui/icons-material';
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  AreaChart,
  Area
} from 'recharts';
const drawerWidth = 240;

// Animation definitions
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AnimatedBackground = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #3a7bd5)'
    : 'linear-gradient(-45deg, #e8f5e8, #c8e6c9, #a5d6a7, #81c784)',
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 15s ease infinite`,
  zIndex: -2
}));

const FloatingCircles = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark' 
      ? 'rgba(129, 199, 132, 0.1)' 
      : 'rgba(129, 199, 132, 0.3)',
    animation: `${floatAnimation} 8s ease-in-out infinite`,
    filter: 'blur(40px)'
  },
  '&::before': {
    width: '300px',
    height: '300px',
    top: '20%',
    left: '10%',
    animationDelay: '0s'
  },
  '&::after': {
    width: '400px',
    height: '400px',
    bottom: '15%',
    right: '10%',
    animationDelay: '2s',
    animationDirection: 'reverse'
  }
}));

const DashboardContent = () => {
  const [stats, setStats] = useState({
    totalTreatmentRooms: 8,
    activeTreatments: 5,
    dailyRevenue: 12500,
    monthlyGrowth: 15.2,
    todayAppointments: 24,
    completedTreatments: 18,
    activeTherapists: 6,
    clientSatisfaction: 4.8
  });

  // Haftalık gelir verileri
  const weeklyRevenue = [
    { day: 'Pzt', revenue: 8500, appointments: 18 },
    { day: 'Sal', revenue: 12000, appointments: 24 },
    { day: 'Çar', revenue: 9500, appointments: 20 },
    { day: 'Per', revenue: 15000, appointments: 28 },
    { day: 'Cum', revenue: 18500, appointments: 32 },
    { day: 'Cmt', revenue: 22000, appointments: 35 },
    { day: 'Paz', revenue: 16500, appointments: 28 }
  ];

  // Tedavi türleri dağılımı
  const treatmentData = [
    { name: 'İsveç Masajı', value: 35, color: '#4CAF50' },
    { name: 'Aromaterapi', value: 25, color: '#2196F3' },
    { name: 'Cilt Bakımı', value: 20, color: '#FF9800' },
    { name: 'Hidroterapi', value: 12, color: '#9C27B0' },
    { name: 'Diğer', value: 8, color: '#607D8B' }
  ];

  // Terapist performansı
  const therapistPerformance = [
    { name: 'Elif Y.', rating: 4.9, sessions: 45 },
    { name: 'Ahmet Ö.', rating: 4.8, sessions: 38 },
    { name: 'Selin C.', rating: 4.7, sessions: 42 },
    { name: 'Murat D.', rating: 4.6, sessions: 35 }
  ];

  // Saatlik randevu yoğunluğu
  const hourlyAppointments = [
    { hour: '09:00', appointments: 3 },
    { hour: '10:00', appointments: 5 },
    { hour: '11:00', appointments: 7 },
    { hour: '12:00', appointments: 4 },
    { hour: '13:00', appointments: 2 },
    { hour: '14:00', appointments: 6 },
    { hour: '15:00', appointments: 8 },
    { hour: '16:00', appointments: 9 },
    { hour: '17:00', appointments: 7 },
    { hour: '18:00', appointments: 5 },
    { hour: '19:00', appointments: 3 },
    { hour: '20:00', appointments: 11}
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '100%',
      margin: 0,
      padding: 0,
      minWidth: '100%'
    }}>
      {/* Stat kartları - tam genişlik kullanımı */}
      <Grid 
        container 
        spacing={10} 
        sx={{ 
          mb: 4, 
          width: '100%',
          maxWidth: '100%',
          ml: 0, // margin-left sıfırlandı
          '& .MuiGrid-item': {
            paddingLeft: '24px !important' // Her item için eşit padding
          },
          '& .MuiGrid-item:first-of-type': {
            paddingLeft: '0 !important' // İlk item için padding kaldırıldı
          }
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card 
            elevation={10} 
            sx={{ 
              backdropFilter: 'blur(10px)', 
              background: 'rgba(129, 199, 132, 0.1)',
              height: '140px', 
              minHeight: '140px',
              maxHeight: '140px',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <CardContent sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              padding: '16px !important',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                height: '100%',
                width: '100%'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  minWidth: 0,
                  flex: 1
                }}>
                  <Typography 
                    color="textSecondary" 
                    gutterBottom 
                    variant="body2"
                    sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    Terapi Odaları
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1 }}
                  >
                    {stats.totalTreatmentRooms}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0, ml: 1 }}>
                  <SpaIcon sx={{ fontSize: 40, color: 'success.main' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            elevation={10} 
            sx={{ 
              backdropFilter: 'blur(10px)', 
              background: 'rgba(76, 175, 80, 0.1)',
              height: '140px', 
              minHeight: '140px',
              maxHeight: '140px',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <CardContent sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              padding: '16px !important',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flex: 1
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  minWidth: 0,
                  flex: 1
                }}>
                  <Typography 
                    color="textSecondary" 
                    gutterBottom 
                    variant="body2"
                    sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    Aktif Tedaviler
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1 }}
                  >
                    {stats.activeTreatments}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0, ml: 1 }}>
                  <LocalHospital sx={{ fontSize: 40, color: 'success.main' }} />
                </Box>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={(stats.activeTreatments / stats.totalTreatmentRooms) * 100} 
                sx={{ mt: 1, height: 6, borderRadius: 3, flexShrink: 0 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            elevation={10} 
            sx={{ 
              backdropFilter: 'blur(10px)', 
              background: 'rgba(255, 193, 7, 0.1)',
              height: '140px', 
              minHeight: '140px',
              maxHeight: '140px',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <CardContent sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              padding: '16px !important',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                height: '100%',
                width: '100%'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  minWidth: 0,
                  flex: 1
                }}>
                  <Typography 
                    color="textSecondary" 
                    gutterBottom 
                    variant="body2"
                    sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    Günlük Gelir
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1 }}
                  >
                    ₺{stats.dailyRevenue.toLocaleString()}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0, ml: 1 }}>
                  <MonetizationOn sx={{ fontSize: 40, color: 'warning.main' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card 
            elevation={10} 
            sx={{ 
              backdropFilter: 'blur(10px)', 
              background: 'rgba(156, 39, 176, 0.1)',
              height: '140px', 
              minHeight: '140px',
              maxHeight: '140px',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            <CardContent sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              padding: '16px !important',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                height: '100%',
                width: '100%'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  minWidth: 0,
                  flex: 1
                }}>
                  <Typography 
                    color="textSecondary" 
                    gutterBottom 
                    variant="body2"
                    sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    Büyüme Oranı
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem', lineHeight: 1 }}
                  >
                    %{stats.monthlyGrowth}
                  </Typography>
                </Box>
                <Box sx={{ flexShrink: 0, ml: 1 }}>
                  <TrendingUp sx={{ fontSize: 40, color: 'secondary.main' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Grafik bölümü - düzenlenmiş */}
      <Grid 
        container 
        spacing={20} 
        sx={{ 
          paddingTop:'20px', 
          mb: 4, 
          width: '100%', 
          maxWidth: '100%', 
          ml: 0,
          '& .MuiGrid-item': {
            paddingLeft: '24px !important'
          },
          '& .MuiGrid-item:first-of-type': {
            paddingLeft: '0 !important'
          }
        }}
      >
        <Grid item xs={12} md={8}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '400px', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              Haftalık Gelir ve Randevu Analizi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={weeklyRevenue} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'revenue' ? `₺${value.toLocaleString()}` : value,
                    name === 'revenue' ? 'Gelir' : 'Randevu'
                  ]}
                  labelStyle={{ color: '#333' }}
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '8px' }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#4CAF50" name="Gelir (₺)" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="appointments" stroke="#2196F3" strokeWidth={3} name="Randevu Sayısı" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '400px', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              🧖‍♀️ Tedavi Türleri Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={treatmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {treatmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`%${value}`, 'Oran']} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color, fontSize: '12px' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
                <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '400px', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              🕐 Bugünkü Randevular
            </Typography>
            <Box sx={{ mt: 2, maxHeight: '300px', overflowY: 'auto' }}>
              {[
                { time: '10:00', client: 'Ayşe Demir', treatment: 'İsveç Masajı', status: 'active' },
                { time: '11:30', client: 'Mehmet Kaya', treatment: 'Aromaterapi', status: 'upcoming' },
                { time: '14:00', client: 'Fatma Öz', treatment: 'Cilt Bakımı', status: 'upcoming' },
                { time: '16:00', client: 'Can Özkan', treatment: 'Hidroterapi', status: 'upcoming' }
              ].map((appointment, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2, 
                    p: 2, 
                    backgroundColor: appointment.status === 'active' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.03)', 
                    borderRadius: 2,
                    borderLeft: appointment.status === 'active' ? '4px solid #4CAF50' : '4px solid #ccc'
                  }}
                >
                  <Box sx={{ 
                    minWidth: 50, 
                    textAlign: 'center',
                    mr: 2
                  }}>
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      {appointment.time}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight="bold">
                      {appointment.client}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {appointment.treatment}
                    </Typography>
                  </Box>
                  {appointment.status === 'active' && (
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      backgroundColor: 'success.main',
                      animation: 'pulse 2s infinite'
                    }} />
                  )}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* İkinci grafik satırı - düzenlenmiş */}
      <Grid 
        container 
        spacing={15} 
        sx={{ 
          mb: 4, 
          width: '100%', 
          maxWidth: '100%', 
          ml: 0,
          '& .MuiGrid-item': {
            paddingLeft: '24px !important'
          },
          '& .MuiGrid-item:first-of-type': {
            paddingLeft: '0 !important'
          }
        }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '350px', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              ⭐ Terapist Performans Skorları
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={therapistPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" />
                <YAxis domain={[4.0, 5.0]} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'rating' ? `${value}/5.0` : value,
                    name === 'rating' ? 'Puan' : 'Seans Sayısı'
                  ]}
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '8px' }}
                />
                <Bar dataKey="rating" fill="#FF9800" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '350px', width: '100%' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              ⏰ Saatlik Randevu Yoğunluğu
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={hourlyAppointments} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [value, 'Randevu Sayısı']}
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="appointments" 
                  stroke="#9C27B0" 
                  fill="rgba(156, 39, 176, 0.3)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
                <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '350px', width: '300px' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              📋 Bugünün Özeti
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex',height:'70px', alignItems: 'center', mb: 2, p: 2, backgroundColor: 'rgba(76, 175, 80, 0.1)', borderRadius: 2 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  backgroundColor: 'success.main', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <Typography color="white" fontWeight="bold">📅</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">Toplam Randevu</Typography>
                  <Typography variant="h6" fontWeight="bold">{stats.todayAppointments}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex',height: "70px", alignItems: 'center', mb: 2, p: 2, backgroundColor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  backgroundColor: 'info.main', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <Typography color="white" fontWeight="bold">✅</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">Tamamlanan</Typography>
                  <Typography variant="h6" fontWeight="bold">{stats.completedTreatments}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', height:'70px',alignItems: 'center', mb: 2, p: 2, backgroundColor: 'rgba(255, 152, 0, 0.1)', borderRadius: 2 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  backgroundColor: 'warning.main', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <Typography color="white" fontWeight="bold">👨‍⚕️</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="textSecondary">Aktif Terapist</Typography>
                  <Typography variant="h6" fontWeight="bold">{stats.activeTherapists}</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Alt bölüm - düzenlenmiş */}
      <Grid 
        container 
        spacing={20} 
        sx={{ 
          width: '100%', 
          maxWidth: '100%', 
          ml: 0,
          '& .MuiGrid-item': {
            paddingLeft: '24px !important'
          },
          '& .MuiGrid-item:first-of-type': {
            paddingLeft: '0 !important'
          }
        }}
      >




        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '300px', width: '1250px' }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
              🎯 Memnuniyet Skoru
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
              <Box sx={{ position: 'relative', width: 150, height: 150, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { value: stats.clientSatisfaction * 20, fill: '#4CAF50' },
                        { value: 100 - (stats.clientSatisfaction * 20), fill: '#E0E0E0' }
                      ]}
                      cx="50%"
                      cy="50%"
                      startAngle={90}
                      endAngle={-270}
                      innerRadius={50}
                      outerRadius={70}
                      dataKey="value"
                    />
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <Typography variant="h4" fontWeight="bold" color="success.main">
                    {stats.clientSatisfaction}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    /5.0
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" color="success.main" fontWeight="bold">
                Mükemmel Memnuniyet!
              </Typography>
              <Typography variant="body2" color="textSecondary" textAlign="center">
                Müşterilerinizin %96'sı hizmetinizden çok memnun
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const PaymentContent = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Gelir', description: 'İsveç Masajı - Ayşe Demir', amount: 450, date: '28.07.2025' },
    { id: 2, type: 'Gider', description: 'Aromaterapi Yağları', amount: -280, date: '27.07.2025' },
    { id: 3, type: 'Gelir', description: 'Cilt Bakım Paketi - Mehmet Kaya', amount: 650, date: '27.07.2025' },
    { id: 4, type: 'Gider', description: 'Temizlik Malzemeleri', amount: -150, date: '26.07.2025' }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Gelir',
    description: '',
    amount: '',
    date: new Date().toLocaleDateString('tr-TR')
  });

  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleClickOpen = () => {
    setEditingTransaction(null);
    setFormData({
      type: 'Gelir',
      description: '',
      amount: '',
      date: new Date().toLocaleDateString('tr-TR')
    });
    setOpen(true);
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      type: transaction.type,
      description: transaction.description,
      amount: Math.abs(transaction.amount).toString(),
      date: transaction.date
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTransaction(null);
    setFormData({
      type: 'Gelir',
      description: '',
      amount: '',
      date: new Date().toLocaleDateString('tr-TR')
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.description && formData.amount) {
      if (editingTransaction) {
        // Düzenleme işlemi
        const updatedTransaction = {
          ...editingTransaction,
          type: formData.type,
          description: formData.description,
          amount: formData.type === 'Gelir' ? parseFloat(formData.amount) : -parseFloat(formData.amount),
          date: formData.date
        };
        
        setTransactions(prev => prev.map(t => 
          t.id === editingTransaction.id ? updatedTransaction : t
        ));
      } else {
        // Yeni ekleme işlemi
        const newTransaction = {
          id: Math.max(...transactions.map(t => t.id)) + 1,
          type: formData.type,
          description: formData.description,
          amount: formData.type === 'Gelir' ? parseFloat(formData.amount) : -parseFloat(formData.amount),
          date: formData.date
        };
        
        setTransactions(prev => [newTransaction, ...prev]);
      }
      
      handleClose();
    }
  };

  // Toplam hesaplamaları
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = Math.abs(transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0));
  const netProfit = totalIncome - totalExpense;

  // Grafik verileri
  const pieData = [
    { name: 'Gelir', value: totalIncome, color: '#4caf50' },
    { name: 'Gider', value: totalExpense, color: '#f44336' }
  ];

  // Günlük trend verisi
  const dailyData = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    const existing = acc.find(item => item.date === date);
    
    if (existing) {
      if (transaction.amount > 0) {
        existing.gelir += transaction.amount;
      } else {
        existing.gider += Math.abs(transaction.amount);
      }
    } else {
      acc.push({
        date,
        gelir: transaction.amount > 0 ? transaction.amount : 0,
        gider: transaction.amount < 0 ? Math.abs(transaction.amount) : 0
      });
    }
    
    return acc;
  }, []).sort((a, b) => new Date(a.date.split('.').reverse().join('-')) - new Date(b.date.split('.').reverse().join('-')));

  // Aylık performans verisi (örnek)
  const monthlyData = [
    { month: 'Ocak', gelir: 2400, gider: 1200, kar: 1200 },
    { month: 'Şubat', gelir: 2800, gider: 1400, kar: 1400 },
    { month: 'Mart', gelir: 3200, gider: 1600, kar: 1600 },
    { month: 'Nisan', gelir: 2900, gider: 1300, kar: 1600 },
    { month: 'Mayıs', gelir: 3400, gider: 1800, kar: 1600 },
    { month: 'Haziran', gelir: 3800, gider: 2000, kar: 1800 },
    { month: 'Temmuz', gelir: totalIncome, gider: totalExpense, kar: netProfit }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Finansal Durum
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Ödeme Ekle
        </Button>
      </Box>

      {/* 1. Ödemeler Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Son İşlemler</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tip</TableCell>
                <TableCell>Açıklama</TableCell>
                <TableCell>Tutar</TableCell>
                <TableCell>Tarih</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Chip 
                      label={transaction.type} 
                      color={transaction.type === 'Gelir' ? 'success' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell sx={{ color: transaction.amount > 0 ? 'success.main' : 'error.main' }}>
                    ₺{Math.abs(transaction.amount).toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(transaction)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDelete(transaction.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Toplam Gelir/Gider Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)',width:'350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Gelir
              </Typography>
              <Typography variant="h4" color="success.main">
                ₺{totalIncome.toLocaleString('tr-TR')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(244, 67, 54, 0.1)',width:'350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Gider
              </Typography>
              <Typography variant="h4" color="error.main">
                ₺{totalExpense.toLocaleString('tr-TR')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(25, 118, 210, 0.1)',width:'350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Net Kar
              </Typography>
              <Typography variant="h4" color={netProfit >= 0 ? "success.main" : "error.main"}>
                ₺{netProfit.toLocaleString('tr-TR')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Gelir/Gider Pasta Grafiği */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px',width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Gelir/Gider Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ₺${value.toLocaleString('tr-TR')} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₺${value.toLocaleString('tr-TR')}`} />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Günlük Trend Grafiği */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px',width:'420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Günlük Trend
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `₺${value.toLocaleString('tr-TR')}`} />
                <Legend />
                <Bar dataKey="gelir" fill="#4caf50" name="Gelir" />
                <Bar dataKey="gider" fill="#f44336" name="Gider" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Aylık Performans Grafiği */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px',width:'420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Aylık Performans Trendi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₺${value.toLocaleString('tr-TR')}`} />
                <Legend />
                <Bar dataKey="gelir" fill="#4caf50" name="Gelir" />
                <Bar dataKey="gider" fill="#f44336" name="Gider" />
                <Line type="monotone" dataKey="kar" stroke="#2196f3" strokeWidth={3} name="Net Kar" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. İstatistikler Kartları - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center',width:'350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Ortalama Günlük Gelir
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{dailyData.length > 0 ? Math.round(totalIncome / dailyData.length).toLocaleString('tr-TR') : '0'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center',width:'350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Kar Marjı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{totalIncome > 0 ? Math.round((netProfit / totalIncome) * 100) : '0'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center',width:'350px' }}>
            <Person sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h6" color="info.main">
              Toplam İşlem
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {transactions.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Yeni Ödeme Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingTransaction ? 'Ödeme Düzenle' : 'Yeni Ödeme Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>İşlem Tipi</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                label="İşlem Tipi"
              >
                <MenuItem value="Gelir">Gelir</MenuItem>
                <MenuItem value="Gider">Gider</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="description"
              label="Açıklama"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              placeholder="örn: İsveç Masajı - Müşteri Adı"
            />

            <TextField
              name="amount"
              label="Tutar"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">₺</InputAdornment>,
              }}
            />

            <TextField
              name="date"
              label="Tarih"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.description || !formData.amount}
          >
            {editingTransaction ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const TreatmentsContent = () => {
  const [treatments, setTreatments] = useState([
    { id: 1, name: 'İsveç Masajı', duration: '60', price: 450, category: 'Masaj', status: 'Aktif', popularity: 85 },
    { id: 2, name: 'Aromaterapi', duration: '90', price: 650, category: 'Terapötik', status: 'Aktif', popularity: 92 },
    { id: 3, name: 'Cilt Bakımı', duration: '75', price: 550, category: 'Estetik', status: 'Aktif', popularity: 78 },
    { id: 4, name: 'Sıcak Taş Masajı', duration: '90', price: 750, category: 'Masaj', status: 'Bakımda', popularity: 65 },
    { id: 5, name: 'Hidroterapi', duration: '60', price: 400, category: 'Hidroterapi', status: 'Aktif', popularity: 70 },
    { id: 6, name: 'Refleksoloji', duration: '45', price: 350, category: 'Terapötik', status: 'Aktif', popularity: 88 }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    price: '',
    category: 'Masaj',
    status: 'Aktif'
  });
  const [editingTreatment, setEditingTreatment] = useState(null);

  const handleClickOpen = () => {
    setEditingTreatment(null);
    setFormData({
      name: '',
      duration: '',
      price: '',
      category: 'Masaj',
      status: 'Aktif'
    });
    setOpen(true);
  };

  const handleEdit = (treatment) => {
    setEditingTreatment(treatment);
    setFormData({
      name: treatment.name,
      duration: treatment.duration,
      price: treatment.price.toString(),
      category: treatment.category,
      status: treatment.status
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setTreatments(prev => prev.filter(t => t.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTreatment(null);
    setFormData({
      name: '',
      duration: '',
      price: '',
      category: 'Masaj',
      status: 'Aktif'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.duration && formData.price) {
      if (editingTreatment) {
        const updatedTreatment = {
          ...editingTreatment,
          name: formData.name,
          duration: formData.duration,
          price: parseFloat(formData.price),
          category: formData.category,
          status: formData.status
        };
        
        setTreatments(prev => prev.map(t => 
          t.id === editingTreatment.id ? updatedTreatment : t
        ));
      } else {
        const newTreatment = {
          id: Math.max(...treatments.map(t => t.id)) + 1,
          name: formData.name,
          duration: formData.duration,
          price: parseFloat(formData.price),
          category: formData.category,
          status: formData.status,
          popularity: Math.floor(Math.random() * 40) + 60
        };
        
        setTreatments(prev => [newTreatment, ...prev]);
      }
      
      handleClose();
    }
  };

  // Kategori istatistikleri
  const categoryStats = treatments.reduce((acc, treatment) => {
    acc[treatment.category] = (acc[treatment.category] || 0) + 1;
    return acc;
  }, {});

  const masajCount = categoryStats['Masaj'] || 0;
  const estetikCount = categoryStats['Estetik'] || 0;
  const terapotikCount = categoryStats['Terapötik'] || 0;
  const hidroterapiCount = categoryStats['Hidroterapi'] || 0;

  // Ortalama değerler
  const averagePrice = treatments.length > 0 ? 
    Math.round(treatments.reduce((sum, t) => sum + t.price, 0) / treatments.length) : 0;
  const averageDuration = treatments.length > 0 ? 
    Math.round(treatments.reduce((sum, t) => sum + parseInt(t.duration), 0) / treatments.length) : 0;
  const activeCount = treatments.filter(t => t.status === 'Aktif').length;

  // Grafik verileri
  const categoryData = [
    { name: 'Masaj', value: masajCount, color: '#4caf50' },
    { name: 'Estetik', value: estetikCount, color: '#ff9800' },
    { name: 'Terapötik', value: terapotikCount, color: '#2196f3' },
    { name: 'Hidroterapi', value: hidroterapiCount, color: '#9c27b0' }
  ].filter(item => item.value > 0);

  // Fiyat dağılımı grafiği
  const priceRanges = treatments.reduce((acc, treatment) => {
    const price = treatment.price;
    let range;
    if (price < 400) range = '0-399₺';
    else if (price < 600) range = '400-599₺';
    else if (price < 800) range = '600-799₺';
    else range = '800₺+';
    
    acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {});

  const priceData = Object.entries(priceRanges).map(([range, count]) => ({
    range,
    count
  }));

  // Popülerlik trendi
  const popularityData = treatments.map(treatment => ({
    name: treatment.name.length > 15 ? treatment.name.substring(0, 15) + '...' : treatment.name,
    popularity: treatment.popularity,
    price: treatment.price
  })).sort((a, b) => b.popularity - a.popularity);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Tedavi Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Tedavi Ekle
        </Button>
      </Box>

      {/* 1. Tedavi Listesi Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Tedavi Listesi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tedavi Adı</TableCell>
                <TableCell>Süre</TableCell>
                <TableCell>Fiyat</TableCell>
                <TableCell>Kategori</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell>Popülerlik</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {treatments.map((treatment) => (
                <TableRow key={treatment.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{treatment.name}</TableCell>
                  <TableCell>{treatment.duration} dk</TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{treatment.price.toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={treatment.category} 
                      size="small"
                      color={
                        treatment.category === 'Masaj' ? 'success' :
                        treatment.category === 'Estetik' ? 'warning' :
                        treatment.category === 'Terapötik' ? 'info' : 'secondary'
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={treatment.status} 
                      color={treatment.status === 'Aktif' ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 60, 
                          height: 6, 
                          bgcolor: 'grey.200', 
                          borderRadius: 3,
                          overflow: 'hidden'
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: `${treatment.popularity}%`, 
                            height: '100%', 
                            bgcolor: treatment.popularity > 80 ? 'success.main' : 
                                    treatment.popularity > 60 ? 'warning.main' : 'error.main',
                            borderRadius: 3
                          }} 
                        />
                      </Box>
                      <Typography variant="caption">%{treatment.popularity}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(treatment)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDelete(treatment.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Kategori İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Masaj Tedavileri
              </Typography>
              <Typography variant="h4" color="success.main">
                {masajCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Estetik Bakım
              </Typography>
              <Typography variant="h4" color="warning.main">
                {estetikCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Terapötik Tedavi
              </Typography>
              <Typography variant="h4" color="info.main">
                {terapotikCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Kategori Dağılımı Pasta Grafiği */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Kategori Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Fiyat Dağılımı Bar Grafiği */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Fiyat Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196f3" name="Tedavi Sayısı" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Popülerlik Trendi */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Tedavi Popülerlik ve Fiyat Analizi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={popularityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value) => `${value}`} />
                <Legend />
                <Bar yAxisId="left" dataKey="popularity" fill="#4caf50" name="Popülerlik (%)" />
                <Line yAxisId="right" type="monotone" dataKey="price" stroke="#f44336" strokeWidth={3} name="Fiyat (₺)" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Ortalama Fiyat
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{averagePrice.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Schedule sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h6" color="info.main">
              Ortalama Süre
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {averageDuration} dk
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Aktif Tedavi
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {activeCount} / {treatments.length}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Yeni Tedavi Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingTreatment ? 'Tedavi Düzenle' : 'Yeni Tedavi Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              name="name"
              label="Tedavi Adı"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              placeholder="örn: İsveç Masajı"
            />

            <TextField
              name="duration"
              label="Süre"
              type="number"
              value={formData.duration}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">dakika</InputAdornment>,
              }}
            />

            <TextField
              name="price"
              label="Fiyat"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">₺</InputAdornment>,
              }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Kategori</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                label="Kategori"
              >
                <MenuItem value="Masaj">Masaj</MenuItem>
                <MenuItem value="Estetik">Estetik</MenuItem>
                <MenuItem value="Terapötik">Terapötik</MenuItem>
                <MenuItem value="Hidroterapi">Hidroterapi</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Durum</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                label="Durum"
              >
                <MenuItem value="Aktif">Aktif</MenuItem>
                <MenuItem value="Bakımda">Bakımda</MenuItem>
                <MenuItem value="Pasif">Pasif</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.name || !formData.duration || !formData.price}
          >
            {editingTreatment ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const AppointmentsContent = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, client: 'Ayşe Demir', treatment: 'İsveç Masajı', therapist: 'Elif Yılmaz', date: '28.07.2025', time: '10:00', status: 'Onaylandı', duration: 60, price: 450 },
    { id: 2, client: 'Mehmet Kaya', treatment: 'Aromaterapi', therapist: 'Ahmet Öz', date: '28.07.2025', time: '11:30', status: 'Devam Ediyor', duration: 90, price: 650 },
    { id: 3, client: 'Fatma Öz', treatment: 'Cilt Bakımı', therapist: 'Selin Can', date: '28.07.2025', time: '14:00', status: 'Bekliyor', duration: 75, price: 550 },
    { id: 4, client: 'Can Özkan', treatment: 'Hidroterapi', therapist: 'Murat Demir', date: '28.07.2025', time: '16:00', status: 'Onaylandı', duration: 60, price: 400 },
    { id: 5, client: 'Zeynep Şen', treatment: 'Sıcak Taş Masajı', therapist: 'Elif Yılmaz', date: '29.07.2025', time: '09:00', status: 'Onaylandı', duration: 90, price: 750 },
    { id: 6, client: 'Ali Vural', treatment: 'Refleksoloji', therapist: 'Ahmet Öz', date: '29.07.2025', time: '15:30', status: 'Bekliyor', duration: 45, price: 350 }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    treatment: '',
    therapist: '',
    date: new Date().toLocaleDateString('tr-TR'),
    time: '',
    status: 'Bekliyor'
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  const handleClickOpen = () => {
    setEditingAppointment(null);
    setFormData({
      client: '',
      treatment: '',
      therapist: '',
      date: new Date().toLocaleDateString('tr-TR'),
      time: '',
      status: 'Bekliyor'
    });
    setOpen(true);
  };

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setFormData({
      client: appointment.client,
      treatment: appointment.treatment,
      therapist: appointment.therapist,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingAppointment(null);
    setFormData({
      client: '',
      treatment: '',
      therapist: '',
      date: new Date().toLocaleDateString('tr-TR'),
      time: '',
      status: 'Bekliyor'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.client && formData.treatment && formData.therapist && formData.time) {
      if (editingAppointment) {
        const updatedAppointment = {
          ...editingAppointment,
          client: formData.client,
          treatment: formData.treatment,
          therapist: formData.therapist,
          date: formData.date,
          time: formData.time,
          status: formData.status
        };
        
        setAppointments(prev => prev.map(a => 
          a.id === editingAppointment.id ? updatedAppointment : a
        ));
      } else {
        const newAppointment = {
          id: Math.max(...appointments.map(a => a.id)) + 1,
          client: formData.client,
          treatment: formData.treatment,
          therapist: formData.therapist,
          date: formData.date,
          time: formData.time,
          status: formData.status,
          duration: 60,
          price: 450
        };
        
        setAppointments(prev => [newAppointment, ...prev]);
      }
      
      handleClose();
    }
  };

  // İstatistikler
  const statusStats = appointments.reduce((acc, appointment) => {
    acc[appointment.status] = (acc[appointment.status] || 0) + 1;
    return acc;
  }, {});

  const onayliCount = statusStats['Onaylandı'] || 0;
  const bekleyenCount = statusStats['Bekliyor'] || 0;
  const devamEdenCount = statusStats['Devam Ediyor'] || 0;
  const iptalCount = statusStats['İptal'] || 0;

  // Günlük randevu sayısı
  const dailyAppointments = appointments.reduce((acc, appointment) => {
    const date = appointment.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const dailyData = Object.entries(dailyAppointments).map(([date, count]) => ({
    date,
    count
  })).sort((a, b) => new Date(a.date.split('.').reverse().join('-')) - new Date(b.date.split('.').reverse().join('-')));

  // Tedavi türü dağılımı
  const treatmentStats = appointments.reduce((acc, appointment) => {
    acc[appointment.treatment] = (acc[appointment.treatment] || 0) + 1;
    return acc;
  }, {});

  const treatmentData = Object.entries(treatmentStats).map(([treatment, count]) => ({
    name: treatment.length > 15 ? treatment.substring(0, 15) + '...' : treatment,
    value: count,
    color: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#00bcd4'][Object.keys(treatmentStats).indexOf(treatment) % 6]
  }));

  // Terapist yoğunluğu
  const therapistStats = appointments.reduce((acc, appointment) => {
    acc[appointment.therapist] = (acc[appointment.therapist] || 0) + 1;
    return acc;
  }, {});

  const therapistData = Object.entries(therapistStats).map(([therapist, count]) => ({
    therapist,
    count
  }));

  // Gelir analizi
  const totalRevenue = appointments.filter(a => a.status === 'Onaylandı' || a.status === 'Devam Ediyor').reduce((sum, a) => sum + (a.price || 0), 0);
  const averageSessionPrice = appointments.length > 0 ? Math.round(totalRevenue / appointments.length) : 0;
  const totalSessions = appointments.length;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Randevu Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Randevu Ekle
        </Button>
      </Box>

      {/* 1. Randevu Listesi Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Randevu Listesi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Müşteri</TableCell>
                <TableCell>Tedavi</TableCell>
                <TableCell>Terapist</TableCell>
                <TableCell>Tarih</TableCell>
                <TableCell>Saat</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell>Fiyat</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{appointment.client}</TableCell>
                  <TableCell>{appointment.treatment}</TableCell>
                  <TableCell>{appointment.therapist}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <Chip 
                      label={appointment.status} 
                      color={
                        appointment.status === 'Onaylandı' ? 'success' : 
                        appointment.status === 'Devam Ediyor' ? 'info' :
                        appointment.status === 'Bekliyor' ? 'warning' : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{(appointment.price || 0).toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(appointment)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDelete(appointment.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        İptal
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Durum İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Onaylı Randevu
              </Typography>
              <Typography variant="h4" color="success.main">
                {onayliCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Bekleyen Randevu
              </Typography>
              <Typography variant="h4" color="warning.main">
                {bekleyenCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Devam Eden
              </Typography>
              <Typography variant="h4" color="info.main">
                {devamEdenCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Tedavi Türü Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Tedavi Türü Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={treatmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {treatmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Günlük Randevu Sayısı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Günlük Randevu Sayısı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196f3" name="Randevu Sayısı" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Terapist Yoğunluğu */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Terapist Yoğunluğu
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={therapistData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="therapist" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#4caf50" name="Randevu Sayısı" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Toplam Gelir
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{totalRevenue.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Ortalama Seans Fiyatı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{averageSessionPrice.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Schedule sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h6" color="info.main">
              Toplam Seans
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {totalSessions}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Yeni Randevu Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingAppointment ? 'Randevu Düzenle' : 'Yeni Randevu Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              name="client"
              label="Müşteri Adı"
              value={formData.client}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              placeholder="örn: Ayşe Demir"
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Tedavi</InputLabel>
              <Select
                name="treatment"
                value={formData.treatment}
                onChange={handleInputChange}
                label="Tedavi"
              >
                <MenuItem value="İsveç Masajı">İsveç Masajı</MenuItem>
                <MenuItem value="Aromaterapi">Aromaterapi</MenuItem>
                <MenuItem value="Cilt Bakımı">Cilt Bakımı</MenuItem>
                <MenuItem value="Hidroterapi">Hidroterapi</MenuItem>
                <MenuItem value="Sıcak Taş Masajı">Sıcak Taş Masajı</MenuItem>
                <MenuItem value="Refleksoloji">Refleksoloji</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Terapist</InputLabel>
              <Select
                name="therapist"
                value={formData.therapist}
                onChange={handleInputChange}
                label="Terapist"
              >
                <MenuItem value="Elif Yılmaz">Elif Yılmaz</MenuItem>
                <MenuItem value="Ahmet Öz">Ahmet Öz</MenuItem>
                <MenuItem value="Selin Can">Selin Can</MenuItem>
                <MenuItem value="Murat Demir">Murat Demir</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="date"
              label="Tarih"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              name="time"
              label="Saat"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Durum</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                label="Durum"
              >
                <MenuItem value="Bekliyor">Bekliyor</MenuItem>
                <MenuItem value="Onaylandı">Onaylandı</MenuItem>
                <MenuItem value="Devam Ediyor">Devam Ediyor</MenuItem>
                <MenuItem value="İptal">İptal</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.client || !formData.treatment || !formData.therapist || !formData.time}
          >
            {editingAppointment ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const ClientsContent = () => {
  const [clients, setClients] = useState([
    { 
      id: 1, 
      name: 'Ayşe Demir', 
      phone: '0532 123 4567', 
      email: 'ayse@email.com', 
      lastVisit: '28.07.2025', 
      totalSessions: 15, 
      membershipType: 'Premium',
      joinDate: '15.01.2025',
      birthDate: '15.05.1990',
      notes: 'Düzenli müşteri, masaj tedavilerini tercih ediyor',
      totalSpent: 6750,
      address: 'Kocasinan Mah. No:123 Kayseri'
    },
    { 
      id: 2, 
      name: 'Mehmet Kaya', 
      phone: '0533 987 6543', 
      email: 'mehmet@email.com', 
      lastVisit: '26.07.2025', 
      totalSessions: 8, 
      membershipType: 'Standart',
      joinDate: '10.03.2025',
      birthDate: '22.08.1985',
      notes: 'Aromaterapi seansları alıyor',
      totalSpent: 5200,
      address: 'Melikgazi Mah. No:456 Kayseri'
    },
    { 
      id: 3, 
      name: 'Fatma Öz', 
      phone: '0534 555 7890', 
      email: 'fatma@email.com', 
      lastVisit: '25.07.2025', 
      totalSessions: 22, 
      membershipType: 'VIP',
      joinDate: '05.12.2024',
      birthDate: '10.03.1988',
      notes: 'VIP müşteri, özel paketleri tercih ediyor',
      totalSpent: 12100,
      address: 'Talas Mah. No:789 Kayseri'
    },
    { 
      id: 4, 
      name: 'Can Özkan', 
      phone: '0535 111 2233', 
      email: 'can@email.com', 
      lastVisit: '24.07.2025', 
      totalSessions: 3, 
      membershipType: 'Standart',
      joinDate: '20.07.2025',
      birthDate: '18.11.1992',
      notes: 'Yeni müşteri',
      totalSpent: 1350,
      address: 'Hacılar Mah. No:321 Kayseri'
    },
    { 
      id: 5, 
      name: 'Zeynep Şen', 
      phone: '0536 444 5566', 
      email: 'zeynep@email.com', 
      lastVisit: '27.07.2025', 
      totalSessions: 12, 
      membershipType: 'Premium',
      joinDate: '08.02.2025',
      birthDate: '25.07.1993',
      notes: 'Cilt bakım paketlerini tercih ediyor',
      totalSpent: 6600,
      address: 'Erciyes Mah. No:654 Kayseri'
    }
  ]);

  const [memberships, setMemberships] = useState([
    {
      id: 1,
      clientName: 'Ayşe Demir',
      membershipType: 'Premium',
      startDate: '15.01.2025',
      endDate: '15.01.2026',
      remainingSessions: 8,
      totalSessions: 12,
      price: 2400,
      status: 'Aktif'
    },
    {
      id: 2,
      clientName: 'Mehmet Kaya',
      membershipType: 'Standart',
      startDate: '10.03.2025',
      endDate: '10.03.2026',
      remainingSessions: 4,
      totalSessions: 8,
      price: 1600,
      status: 'Aktif'
    },
    {
      id: 3,
      clientName: 'Fatma Öz',
      membershipType: 'VIP',
      startDate: '05.12.2024',
      endDate: '05.12.2025',
      remainingSessions: 15,
      totalSessions: 20,
      price: 4000,
      status: 'Aktif'
    },
    {
      id: 4,
      clientName: 'Can Özkan',
      membershipType: 'Standart',
      startDate: '20.07.2025',
      endDate: '20.07.2026',
      remainingSessions: 7,
      totalSessions: 8,
      price: 1600,
      status: 'Aktif'
    },
    {
      id: 5,
      clientName: 'Ali Vural',
      membershipType: 'Premium',
      startDate: '01.06.2025',
      endDate: '01.06.2026',
      remainingSessions: 0,
      totalSessions: 12,
      price: 2400,
      status: 'Süresi Doldu'
    }
  ]);

  const [openClient, setOpenClient] = useState(false);
  const [openMembership, setOpenMembership] = useState(false);
  const [clientFormData, setClientFormData] = useState({
    name: '',
    phone: '',
    email: '',
    membershipType: 'Standart',
    birthDate: '',
    address: '',
    notes: ''
  });
  const [membershipFormData, setMembershipFormData] = useState({
    clientName: '',
    membershipType: 'Standart',
    totalSessions: '',
    price: '',
    startDate: new Date().toLocaleDateString('tr-TR')
  });
  const [editingClient, setEditingClient] = useState(null);
  const [editingMembership, setEditingMembership] = useState(null);

  const handleClientClickOpen = () => {
    setEditingClient(null);
    setClientFormData({
      name: '',
      phone: '',
      email: '',
      membershipType: 'Standart',
      birthDate: '',
      address: '',
      notes: ''
    });
    setOpenClient(true);
  };

  const handleMembershipClickOpen = () => {
    setEditingMembership(null);
    setMembershipFormData({
      clientName: '',
      membershipType: 'Standart',
      totalSessions: '',
      price: '',
      startDate: new Date().toLocaleDateString('tr-TR')
    });
    setOpenMembership(true);
  };

  const handleClientEdit = (client) => {
    setEditingClient(client);
    setClientFormData({
      name: client.name,
      phone: client.phone,
      email: client.email,
      membershipType: client.membershipType,
      birthDate: client.birthDate,
      address: client.address,
      notes: client.notes
    });
    setOpenClient(true);
  };

  const handleMembershipEdit = (membership) => {
    setEditingMembership(membership);
    setMembershipFormData({
      clientName: membership.clientName,
      membershipType: membership.membershipType,
      totalSessions: membership.totalSessions.toString(),
      price: membership.price.toString(),
      startDate: membership.startDate
    });
    setOpenMembership(true);
  };

  const handleClientDelete = (id) => {
    setClients(prev => prev.filter(c => c.id !== id));
  };

  const handleMembershipDelete = (id) => {
    setMemberships(prev => prev.filter(m => m.id !== id));
  };

  const handleClientClose = () => {
    setOpenClient(false);
    setEditingClient(null);
  };

  const handleMembershipClose = () => {
    setOpenMembership(false);
    setEditingMembership(null);
  };

  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    setClientFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMembershipInputChange = (e) => {
    const { name, value } = e.target;
    setMembershipFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClientSubmit = () => {
    if (clientFormData.name && clientFormData.phone && clientFormData.email) {
      if (editingClient) {
        const updatedClient = {
          ...editingClient,
          ...clientFormData
        };
        setClients(prev => prev.map(c => 
          c.id === editingClient.id ? updatedClient : c
        ));
      } else {
        const newClient = {
          id: Math.max(...clients.map(c => c.id)) + 1,
          ...clientFormData,
          lastVisit: new Date().toLocaleDateString('tr-TR'),
          totalSessions: 0,
          joinDate: new Date().toLocaleDateString('tr-TR'),
          totalSpent: 0
        };
        setClients(prev => [newClient, ...prev]);
      }
      handleClientClose();
    }
  };

  const handleMembershipSubmit = () => {
    if (membershipFormData.clientName && membershipFormData.totalSessions && membershipFormData.price) {
      const endDate = new Date();
      endDate.setFullYear(endDate.getFullYear() + 1);
      
      if (editingMembership) {
        const updatedMembership = {
          ...editingMembership,
          ...membershipFormData,
          totalSessions: parseInt(membershipFormData.totalSessions),
          price: parseFloat(membershipFormData.price),
          endDate: endDate.toLocaleDateString('tr-TR')
        };
        setMemberships(prev => prev.map(m => 
          m.id === editingMembership.id ? updatedMembership : m
        ));
      } else {
        const newMembership = {
          id: Math.max(...memberships.map(m => m.id)) + 1,
          ...membershipFormData,
          totalSessions: parseInt(membershipFormData.totalSessions),
          remainingSessions: parseInt(membershipFormData.totalSessions),
          price: parseFloat(membershipFormData.price),
          endDate: endDate.toLocaleDateString('tr-TR'),
          status: 'Aktif'
        };
        setMemberships(prev => [newMembership, ...prev]);
      }
      handleMembershipClose();
    }
  };

  // CRM İstatistikleri
  const totalClients = clients.length;
  const vipCount = clients.filter(c => c.membershipType === 'VIP').length;
  const premiumCount = clients.filter(c => c.membershipType === 'Premium').length;
  const standartCount = clients.filter(c => c.membershipType === 'Standart').length;
  const totalRevenue = clients.reduce((sum, c) => sum + c.totalSpent, 0);
  const averageSpending = totalClients > 0 ? Math.round(totalRevenue / totalClients) : 0;

  // Üyelik İstatistikleri
  const totalMemberships = memberships.length;
  const activeMemberships = memberships.filter(m => m.status === 'Aktif').length;
  const expiredMemberships = memberships.filter(m => m.status === 'Süresi Doldu').length;
  const membershipRevenue = memberships.reduce((sum, m) => sum + m.price, 0);

  // Grafik verileri
  const membershipTypeData = [
    { name: 'VIP', value: vipCount, color: '#9c27b0' },
    { name: 'Premium', value: premiumCount, color: '#2196f3' },
    { name: 'Standart', value: standartCount, color: '#4caf50' }
  ].filter(item => item.value > 0);

  const monthlyJoinsData = clients.reduce((acc, client) => {
    const month = client.joinDate.split('.')[1] + '.' + client.joinDate.split('.')[2];
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const joinsData = Object.entries(monthlyJoinsData).map(([month, count]) => ({
    month,
    count
  }));

  const membershipStatusData = [
    { name: 'Aktif', value: activeMemberships, color: '#4caf50' },
    { name: 'Süresi Doldu', value: expiredMemberships, color: '#f44336' }
  ].filter(item => item.value > 0);

  const membershipUsageData = memberships.map(m => ({
    client: m.clientName.split(' ')[0],
    kullanilan: m.totalSessions - m.remainingSessions,
    kalan: m.remainingSessions
  }));

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Müşteri ve Üyelik Yönetimi
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleMembershipClickOpen}
            sx={{
              background: 'linear-gradient(45deg, #9c27b0 30%, #e91e63 90%)',
              boxShadow: '0 3px 5px 2px rgba(156, 39, 176, .3)',
            }}
          >
            Yeni Üyelik
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClientClickOpen}
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            }}
          >
            Yeni Müşteri
          </Button>
        </Box>
      </Box>

      {/* 1. CRM - Müşteri Listesi Tablosu */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>CRM - Müşteri Listesi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ad Soyad</TableCell>
                <TableCell>Telefon</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Son Ziyaret</TableCell>
                <TableCell>Toplam Seans</TableCell>
                <TableCell>Üyelik</TableCell>
                <TableCell>Toplam Harcama</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{client.name}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.lastVisit}</TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>{client.totalSessions}</TableCell>
                  <TableCell>
                    <Chip 
                      label={client.membershipType} 
                      color={
                        client.membershipType === 'VIP' ? 'secondary' : 
                        client.membershipType === 'Premium' ? 'primary' : 'success'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{client.totalSpent.toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleClientEdit(client)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleClientDelete(client.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. CRM İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Müşteri
              </Typography>
              <Typography variant="h4" color="success.main">
                {totalClients}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(156, 39, 176, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                VIP Müşteri
              </Typography>
              <Typography variant="h4" color="secondary.main">
                {vipCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam CRM Gelir
              </Typography>
              <Typography variant="h4" color="primary.main">
                ₺{totalRevenue.toLocaleString('tr-TR')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Üyelik Takibi Tablosu */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Üyelik Takibi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Müşteri</TableCell>
                <TableCell>Üyelik Tipi</TableCell>
                <TableCell>Başlangıç</TableCell>
                <TableCell>Bitiş</TableCell>
                <TableCell>Kalan Seans</TableCell>
                <TableCell>Toplam Seans</TableCell>
                <TableCell>Fiyat</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberships.map((membership) => (
                <TableRow key={membership.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{membership.clientName}</TableCell>
                  <TableCell>
                    <Chip 
                      label={membership.membershipType} 
                      color={
                        membership.membershipType === 'VIP' ? 'secondary' : 
                        membership.membershipType === 'Premium' ? 'primary' : 'success'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{membership.startDate}</TableCell>
                  <TableCell>{membership.endDate}</TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', color: membership.remainingSessions === 0 ? 'error.main' : 'success.main' }}>
                    {membership.remainingSessions}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{membership.totalSessions}</TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{membership.price.toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={membership.status} 
                      color={membership.status === 'Aktif' ? 'success' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleMembershipEdit(membership)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleMembershipDelete(membership.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 4. Üyelik İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Aktif Üyelik
              </Typography>
              <Typography variant="h4" color="success.main">
                {activeMemberships}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(244, 67, 54, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Süresi Dolan
              </Typography>
              <Typography variant="h4" color="error.main">
                {expiredMemberships}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Üyelik Geliri
              </Typography>
              <Typography variant="h4" color="warning.main">
                ₺{membershipRevenue.toLocaleString('tr-TR')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 5. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Müşteri Tipi Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Müşteri Tipi Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={membershipTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {membershipTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Aylık Müşteri Katılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Aylık Yeni Müşteri
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={joinsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196f3" name="Yeni Müşteri" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Üyelik Kullanım Analizi */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Üyelik Seans Kullanım Durumu
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={membershipUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="client" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kullanilan" stackId="a" fill="#4caf50" name="Kullanılan Seans" />
                <Bar dataKey="kalan" stackId="a" fill="#ff9800" name="Kalan Seans" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 6. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Ortalama Müşteri Harcama
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{averageSpending.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Premium+ Müşteri Oranı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{totalClients > 0 ? Math.round(((vipCount + premiumCount) / totalClients) * 100) : 0}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Person sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h6" color="info.main">
              Üyelik Yenileme Oranı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{totalMemberships > 0 ? Math.round((activeMemberships / totalMemberships) * 100) : 0}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Müşteri Ekleme/Düzenleme Modal */}
      <Dialog open={openClient} onClose={handleClientClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingClient ? 'Müşteri Düzenle' : 'Yeni Müşteri Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Ad Soyad"
                  value={clientFormData.name}
                  onChange={handleClientInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: Ayşe Demir"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="phone"
                  label="Telefon"
                  value={clientFormData.phone}
                  onChange={handleClientInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: 0532 123 4567"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
                  value={clientFormData.email}
                  onChange={handleClientInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: ayse@email.com"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="birthDate"
                  label="Doğum Tarihi"
                  value={clientFormData.birthDate}
                  onChange={handleClientInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: 15.05.1990"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Üyelik Tipi</InputLabel>
                  <Select
                    name="membershipType"
                    value={clientFormData.membershipType}
                    onChange={handleClientInputChange}
                    label="Üyelik Tipi"
                  >
                    <MenuItem value="Standart">Standart</MenuItem>
                    <MenuItem value="Premium">Premium</MenuItem>
                    <MenuItem value="VIP">VIP</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="address"
                  label="Adres"
                  value={clientFormData.address}
                  onChange={handleClientInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: Kocasinan Mah. No:123 Kayseri"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="notes"
                  label="Notlar"
                  value={clientFormData.notes}
                  onChange={handleClientInputChange}
                  fullWidth
                  multiline
                  rows={3}
                  sx={{ mb: 2 }}
                  placeholder="Müşteri hakkında notlar..."
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClientClose}>İptal</Button>
          <Button 
            onClick={handleClientSubmit} 
            variant="contained"
            disabled={!clientFormData.name || !clientFormData.phone || !clientFormData.email}
          >
            {editingClient ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Üyelik Ekleme/Düzenleme Modal */}
      <Dialog open={openMembership} onClose={handleMembershipClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingMembership ? 'Üyelik Düzenle' : 'Yeni Üyelik Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Müşteri</InputLabel>
              <Select
                name="clientName"
                value={membershipFormData.clientName}
                onChange={handleMembershipInputChange}
                label="Müşteri"
              >
                {clients.map((client) => (
                  <MenuItem key={client.id} value={client.name}>
                    {client.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Üyelik Tipi</InputLabel>
              <Select
                name="membershipType"
                value={membershipFormData.membershipType}
                onChange={handleMembershipInputChange}
                label="Üyelik Tipi"
              >
                <MenuItem value="Standart">Standart</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
                <MenuItem value="VIP">VIP</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="totalSessions"
              label="Toplam Seans"
              type="number"
              value={membershipFormData.totalSessions}
              onChange={handleMembershipInputChange}
              fullWidth
              sx={{ mb: 2 }}
              placeholder="örn: 12"
            />

            <TextField
              name="price"
              label="Fiyat"
              type="number"
              value={membershipFormData.price}
              onChange={handleMembershipInputChange}
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">₺</InputAdornment>,
              }}
            />

            <TextField
              name="startDate"
              label="Başlangıç Tarihi"
              value={membershipFormData.startDate}
              onChange={handleMembershipInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMembershipClose}>İptal</Button>
          <Button 
            onClick={handleMembershipSubmit} 
            variant="contained"
            disabled={!membershipFormData.clientName || !membershipFormData.totalSessions || !membershipFormData.price}
          >
            {editingMembership ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const PackagesContent = () => {
  const [packages, setPackages] = useState([
    { 
      id: 1, 
      name: 'Relax Paketi', 
      treatments: ['İsveç Masajı', 'Aromaterapi'], 
      duration: '180', 
      price: 950, 
      validity: '30',
      category: 'Rahatlama',
      description: 'Zihin ve bedenin rahatlaması için özel tasarlanmış paket',
      popularity: 85,
      status: 'Aktif',
      soldCount: 24
    },
    { 
      id: 2, 
      name: 'Güzellik Paketi', 
      treatments: ['Cilt Bakımı', 'Yüz Masajı'], 
      duration: '150', 
      price: 750, 
      validity: '45',
      category: 'Estetik',
      description: 'Cildinizin güzelliği için kapsamlı bakım paketi',
      popularity: 92,
      status: 'Aktif',
      soldCount: 18
    },
    { 
      id: 3, 
      name: 'Detox Paketi', 
      treatments: ['Sauna', 'Buhar Banyosu', 'Vücut Scrub'], 
      duration: '240', 
      price: 1200, 
      validity: '60',
      category: 'Detoksifikasyon',
      description: 'Vücudunuzu arındırmak için tam detoks deneyimi',
      popularity: 78,
      status: 'Aktif',
      soldCount: 15
    },
    { 
      id: 4, 
      name: 'Çift Paketi', 
      treatments: ['Çift Masajı', 'Jakuzi'], 
      duration: '120', 
      price: 1400, 
      validity: '30',
      category: 'Romantik',
      description: 'Sevdiklerinizle özel anlar yaşamak için ideal paket',
      popularity: 88,
      status: 'Aktif',
      soldCount: 12
    },
    { 
      id: 5, 
      name: 'Sporcu Paketi', 
      treatments: ['Derin Doku Masajı', 'Kriyoterapi'], 
      duration: '90', 
      price: 650, 
      validity: '21',
      category: 'Spor',
      description: 'Sporcular için özel kas gevşetme ve iyileştirme paketi',
      popularity: 75,
      status: 'Aktif',
      soldCount: 9
    },
    { 
      id: 6, 
      name: 'Anti-Age Paketi', 
      treatments: ['Botoks Etkili Yüz Bakımı', 'Altın Maske'], 
      duration: '180', 
      price: 1100, 
      validity: '90',
      category: 'Anti-Aging',
      description: 'Yaşlanma karşıtı özel bakım ve tedavi paketi',
      popularity: 82,
      status: 'Geliştirme',
      soldCount: 6
    }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    treatments: [],
    duration: '',
    price: '',
    validity: '',
    category: 'Rahatlama',
    description: '',
    status: 'Aktif'
  });
  const [editingPackage, setEditingPackage] = useState(null);

  const handleClickOpen = () => {
    setEditingPackage(null);
    setFormData({
      name: '',
      treatments: [],
      duration: '',
      price: '',
      validity: '',
      category: 'Rahatlama',
      description: '',
      status: 'Aktif'
    });
    setOpen(true);
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      treatments: pkg.treatments,
      duration: pkg.duration,
      price: pkg.price.toString(),
      validity: pkg.validity,
      category: pkg.category,
      description: pkg.description,
      status: pkg.status
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingPackage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTreatmentsChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      treatments: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.treatments.length > 0 && formData.duration && formData.price) {
      if (editingPackage) {
        const updatedPackage = {
          ...editingPackage,
          name: formData.name,
          treatments: formData.treatments,
          duration: formData.duration,
          price: parseFloat(formData.price),
          validity: formData.validity,
          category: formData.category,
          description: formData.description,
          status: formData.status
        };
        
        setPackages(prev => prev.map(p => 
          p.id === editingPackage.id ? updatedPackage : p
        ));
      } else {
        const newPackage = {
          id: Math.max(...packages.map(p => p.id)) + 1,
          name: formData.name,
          treatments: formData.treatments,
          duration: formData.duration,
          price: parseFloat(formData.price),
          validity: formData.validity,
          category: formData.category,
          description: formData.description,
          status: formData.status,
          popularity: Math.floor(Math.random() * 40) + 60,
          soldCount: 0
        };
        
        setPackages(prev => [newPackage, ...prev]);
      }
      
      handleClose();
    }
  };

  // İstatistikler
  const totalPackages = packages.length;
  const activePackages = packages.filter(p => p.status === 'Aktif').length;
  const totalSold = packages.reduce((sum, p) => sum + p.soldCount, 0);
  const totalRevenue = packages.reduce((sum, p) => sum + (p.price * p.soldCount), 0);
  const averagePrice = packages.length > 0 ? Math.round(packages.reduce((sum, p) => sum + p.price, 0) / packages.length) : 0;

  // Kategori istatistikleri
  const categoryStats = packages.reduce((acc, pkg) => {
    acc[pkg.category] = (acc[pkg.category] || 0) + 1;
    return acc;
  }, {});

  const categoryData = Object.entries(categoryStats).map(([category, count]) => ({
    name: category,
    value: count,
    color: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#00bcd4'][Object.keys(categoryStats).indexOf(category) % 6]
  }));

  // Fiyat aralığı dağılımı
  const priceRanges = packages.reduce((acc, pkg) => {
    const price = pkg.price;
    let range;
    if (price < 700) range = '500-699₺';
    else if (price < 1000) range = '700-999₺';
    else if (price < 1300) range = '1000-1299₺';
    else range = '1300₺+';
    
    acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {});

  const priceData = Object.entries(priceRanges).map(([range, count]) => ({
    range,
    count
  }));

  // Popülerlik ve satış analizi
  const salesData = packages.map(pkg => ({
    name: pkg.name.length > 12 ? pkg.name.substring(0, 12) + '...' : pkg.name,
    popularity: pkg.popularity,
    sold: pkg.soldCount,
    revenue: pkg.price * pkg.soldCount
  })).sort((a, b) => b.sold - a.sold);

  // Mevcut tedaviler listesi
  const availableTreatments = [
    'İsveç Masajı', 'Aromaterapi', 'Cilt Bakımı', 'Yüz Masajı', 'Sauna', 
    'Buhar Banyosu', 'Vücut Scrub', 'Çift Masajı', 'Jakuzi', 'Derin Doku Masajı',
    'Kriyoterapi', 'Botoks Etkili Yüz Bakımı', 'Altın Maske', 'Hidroterapi',
    'Refleksoloji', 'Sıcak Taş Masajı', 'Thai Masajı', 'Shiatsu'
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Spa Paket Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Paket Ekle
        </Button>
      </Box>

      {/* 1. Paket Listesi Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Paket Listesi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Paket Adı</TableCell>
                <TableCell>Kategori</TableCell>
                <TableCell>Tedaviler</TableCell>
                <TableCell>Süre</TableCell>
                <TableCell>Fiyat</TableCell>
                <TableCell>Satış</TableCell>
                <TableCell>Popülerlik</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{pkg.name}</TableCell>
                  <TableCell>
                    <Chip 
                      label={pkg.category} 
                      size="small"
                      color={
                        pkg.category === 'Rahatlama' ? 'success' :
                        pkg.category === 'Estetik' ? 'primary' :
                        pkg.category === 'Romantik' ? 'secondary' : 'info'
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 200 }}>
                    <Typography variant="body2" sx={{ 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {pkg.treatments.join(', ')}
                    </Typography>
                  </TableCell>
                  <TableCell>{pkg.duration} dk</TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{pkg.price.toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {pkg.soldCount}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 60, 
                          height: 6, 
                          bgcolor: 'grey.200', 
                          borderRadius: 3,
                          overflow: 'hidden'
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: `${pkg.popularity}%`, 
                            height: '100%', 
                            bgcolor: pkg.popularity > 85 ? 'success.main' : 
                                    pkg.popularity > 70 ? 'warning.main' : 'error.main',
                            borderRadius: 3
                          }} 
                        />
                      </Box>
                      <Typography variant="caption">%{pkg.popularity}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={pkg.status} 
                      color={pkg.status === 'Aktif' ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(pkg)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDelete(pkg.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Paket İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Paket
              </Typography>
              <Typography variant="h4" color="success.main">
                {totalPackages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Aktif Paket
              </Typography>
              <Typography variant="h4" color="primary.main">
                {activePackages}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Satış
              </Typography>
              <Typography variant="h4" color="warning.main">
                {totalSold}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Kategori Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Paket Kategori Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Fiyat Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Fiyat Aralığı Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196f3" name="Paket Sayısı" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Satış Performansı */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Paket Satış Performansı ve Popülerlik
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'Satış Adedi') return [value, name];
                  if (name === 'Popülerlik (%)') return [`%${value}`, name];
                  return [`₺${value}`, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="sold" fill="#4caf50" name="Satış Adedi" />
                <Line yAxisId="right" type="monotone" dataKey="popularity" stroke="#ff9800" strokeWidth={3} name="Popülerlik (%)" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Toplam Paket Geliri
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{totalRevenue.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Ortalama Paket Fiyatı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{averagePrice.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Star sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h6" color="warning.main">
              Ortalama Popülerlik
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{packages.length > 0 ? Math.round(packages.reduce((sum, p) => sum + p.popularity, 0) / packages.length) : 0}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Paket Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingPackage ? 'Paket Düzenle' : 'Yeni Paket Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Paket Adı"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: Relax Paketi"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Kategori</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    label="Kategori"
                  >
                    <MenuItem value="Rahatlama">Rahatlama</MenuItem>
                    <MenuItem value="Estetik">Estetik</MenuItem>
                    <MenuItem value="Detoksifikasyon">Detoksifikasyon</MenuItem>
                    <MenuItem value="Romantik">Romantik</MenuItem>
                    <MenuItem value="Spor">Spor</MenuItem>
                    <MenuItem value="Anti-Aging">Anti-Aging</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Tedaviler</InputLabel>
                  <Select
                    multiple
                    name="treatments"
                    value={formData.treatments}
                    onChange={handleTreatmentsChange}
                    label="Tedaviler"
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {availableTreatments.map((treatment) => (
                      <MenuItem key={treatment} value={treatment}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type="checkbox"
                            checked={formData.treatments.indexOf(treatment) > -1}
                            readOnly
                            style={{ marginRight: 8 }}
                          />
                          {treatment}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="duration"
                  label="Süre"
                  type="number"
                  value={formData.duration}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">dakika</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="price"
                  label="Fiyat"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₺</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="validity"
                  label="Geçerlilik"
                  type="number"
                  value={formData.validity}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">gün</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Durum</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    label="Durum"
                  >
                    <MenuItem value="Aktif">Aktif</MenuItem>
                    <MenuItem value="Geliştirme">Geliştirme</MenuItem>
                    <MenuItem value="Pasif">Pasif</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Açıklama"
                  value={formData.description}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={3}
                  sx={{ mb: 2 }}
                  placeholder="Paket hakkında detaylı açıklama..."
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.name || formData.treatments.length === 0 || !formData.duration || !formData.price}
          >
            {editingPackage ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const TherapistsContent = () => {
  const [therapists, setTherapists] = useState([
    { 
      id: 1, 
      name: 'Elif Yılmaz', 
      specialty: 'İsveç Masajı', 
      experience: '5', 
      status: 'Aktif', 
      rating: 4.9, 
      todayAppointments: 6,
      phone: '0532 111 2233',
      email: 'elif@spa.com',
      joinDate: '15.01.2020',
      totalSessions: 1250,
      monthlyEarnings: 18500,
      workingHours: '09:00 - 18:00',
      certifications: ['İsveç Masajı Sertifikası', 'Aromaterapi Uzmanı'],
      availability: 'Müsait'
    },
    { 
      id: 2, 
      name: 'Ahmet Öz', 
      specialty: 'Aromaterapi', 
      experience: '8', 
      status: 'Aktif', 
      rating: 4.8, 
      todayAppointments: 5,
      phone: '0533 444 5566',
      email: 'ahmet@spa.com',
      joinDate: '20.05.2017',
      totalSessions: 2100,
      monthlyEarnings: 22000,
      workingHours: '10:00 - 19:00',
      certifications: ['Aromaterapi Master', 'Refleksoloji Uzmanı'],
      availability: 'Müsait'
    },
    { 
      id: 3, 
      name: 'Selin Can', 
      specialty: 'Cilt Bakımı', 
      experience: '3', 
      status: 'İzinli', 
      rating: 4.7, 
      todayAppointments: 0,
      phone: '0534 777 8899',
      email: 'selin@spa.com',
      joinDate: '10.03.2022',
      totalSessions: 680,
      monthlyEarnings: 0,
      workingHours: '08:00 - 17:00',
      certifications: ['Cilt Bakım Uzmanı', 'Anti-Aging Sertifikası'],
      availability: 'İzinli'
    },
    { 
      id: 4, 
      name: 'Murat Demir', 
      specialty: 'Hidroterapi', 
      experience: '6', 
      status: 'Aktif', 
      rating: 4.6, 
      todayAppointments: 4,
      phone: '0535 123 4567',
      email: 'murat@spa.com',
      joinDate: '08.09.2019',
      totalSessions: 1580,
      monthlyEarnings: 19200,
      workingHours: '11:00 - 20:00',
      certifications: ['Hidroterapi Uzmanı', 'Spor Masajı'],
      availability: 'Meşgul'
    },
    { 
      id: 5, 
      name: 'Ayşe Kaya', 
      specialty: 'Thai Masajı', 
      experience: '4', 
      status: 'Aktif', 
      rating: 4.8, 
      todayAppointments: 7,
      phone: '0536 999 1111',
      email: 'ayse@spa.com',
      joinDate: '12.11.2021',
      totalSessions: 920,
      monthlyEarnings: 20800,
      workingHours: '09:00 - 18:00',
      certifications: ['Thai Masajı Sertifikası', 'Shiatsu Uzmanı'],
      availability: 'Müsait'
    },
    { 
      id: 6, 
      name: 'Can Özkan', 
      specialty: 'Derin Doku Masajı', 
      experience: '7', 
      status: 'Aktif', 
      rating: 4.9, 
      todayAppointments: 3,
      phone: '0537 666 7777',
      email: 'can@spa.com',
      joinDate: '25.06.2018',
      totalSessions: 1890,
      monthlyEarnings: 21500,
      workingHours: '12:00 - 21:00',
      certifications: ['Derin Doku Masajı', 'Spor Terapisi', 'Kas İskelet Uzmanı'],
      availability: 'Müsait'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    experience: '',
    phone: '',
    email: '',
    workingHours: '',
    certifications: [],
    status: 'Aktif'
  });
  const [editingTherapist, setEditingTherapist] = useState(null);

  const handleClickOpen = () => {
    setEditingTherapist(null);
    setFormData({
      name: '',
      specialty: '',
      experience: '',
      phone: '',
      email: '',
      workingHours: '',
      certifications: [],
      status: 'Aktif'
    });
    setOpen(true);
  };

  const handleEdit = (therapist) => {
    setEditingTherapist(therapist);
    setFormData({
      name: therapist.name,
      specialty: therapist.specialty,
      experience: therapist.experience,
      phone: therapist.phone,
      email: therapist.email,
      workingHours: therapist.workingHours,
      certifications: therapist.certifications,
      status: therapist.status
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setTherapists(prev => prev.filter(t => t.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTherapist(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCertificationsChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      certifications: typeof value === 'string' ? value.split(',') : value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.specialty && formData.experience && formData.phone && formData.email) {
      if (editingTherapist) {
        const updatedTherapist = {
          ...editingTherapist,
          name: formData.name,
          specialty: formData.specialty,
          experience: formData.experience,
          phone: formData.phone,
          email: formData.email,
          workingHours: formData.workingHours,
          certifications: formData.certifications,
          status: formData.status
        };
        
        setTherapists(prev => prev.map(t => 
          t.id === editingTherapist.id ? updatedTherapist : t
        ));
      } else {
        const newTherapist = {
          id: Math.max(...therapists.map(t => t.id)) + 1,
          name: formData.name,
          specialty: formData.specialty,
          experience: formData.experience,
          phone: formData.phone,
          email: formData.email,
          workingHours: formData.workingHours,
          certifications: formData.certifications,
          status: formData.status,
          rating: 4.5,
          todayAppointments: 0,
          joinDate: new Date().toLocaleDateString('tr-TR'),
          totalSessions: 0,
          monthlyEarnings: 0,
          availability: 'Müsait'
        };
        
        setTherapists(prev => [newTherapist, ...prev]);
      }
      
      handleClose();
    }
  };

  // İstatistikler
  const totalTherapists = therapists.length;
  const activeTherapists = therapists.filter(t => t.status === 'Aktif').length;
  const onLeaveTherapists = therapists.filter(t => t.status === 'İzinli').length;
  const totalTodayAppointments = therapists.reduce((sum, t) => sum + t.todayAppointments, 0);
  const totalMonthlySessions = therapists.reduce((sum, t) => sum + t.totalSessions, 0);
  const totalMonthlyEarnings = therapists.reduce((sum, t) => sum + t.monthlyEarnings, 0);
  const averageRating = therapists.length > 0 ? 
    (therapists.reduce((sum, t) => sum + t.rating, 0) / therapists.length).toFixed(1) : 0;
  const averageExperience = therapists.length > 0 ? 
    Math.round(therapists.reduce((sum, t) => sum + parseInt(t.experience), 0) / therapists.length) : 0;

  // Uzmanlık dağılımı
  const specialtyStats = therapists.reduce((acc, therapist) => {
    acc[therapist.specialty] = (acc[therapist.specialty] || 0) + 1;
    return acc;
  }, {});

  const specialtyData = Object.entries(specialtyStats).map(([specialty, count]) => ({
    name: specialty.length > 15 ? specialty.substring(0, 15) + '...' : specialty,
    value: count,
    color: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#00bcd4'][Object.keys(specialtyStats).indexOf(specialty) % 6]
  }));

  // Deneyim seviyeleri dağılımı
  const experienceRanges = therapists.reduce((acc, therapist) => {
    const exp = parseInt(therapist.experience);
    let range;
    if (exp < 3) range = '1-2 yıl';
    else if (exp < 6) range = '3-5 yıl';
    else if (exp < 9) range = '6-8 yıl';
    else range = '9+ yıl';
    
    acc[range] = (acc[range] || 0) + 1;
    return acc;
  }, {});

  const experienceData = Object.entries(experienceRanges).map(([range, count]) => ({
    range,
    count
  }));

  // Performans analizi
  const performanceData = therapists.map(therapist => ({
    name: therapist.name.split(' ')[0],
    rating: therapist.rating,
    sessions: therapist.totalSessions,
    earnings: therapist.monthlyEarnings,
    todayLoad: therapist.todayAppointments
  })).sort((a, b) => b.rating - a.rating);

  // Mevcut sertifikalar
  const availableCertifications = [
    'İsveç Masajı Sertifikası', 'Aromaterapi Uzmanı', 'Aromaterapi Master',
    'Refleksoloji Uzmanı', 'Cilt Bakım Uzmanı', 'Anti-Aging Sertifikası',
    'Hidroterapi Uzmanı', 'Spor Masajı', 'Thai Masajı Sertifikası',
    'Shiatsu Uzmanı', 'Derin Doku Masajı', 'Spor Terapisi',
    'Kas İskelet Uzmanı', 'Hot Stone Massage', 'Prenatal Masaj'
  ];

  const specialties = [
    'İsveç Masajı', 'Aromaterapi', 'Cilt Bakımı', 'Hidroterapi',
    'Thai Masajı', 'Derin Doku Masajı', 'Refleksoloji', 'Shiatsu',
    'Sıcak Taş Masajı', 'Spor Masajı', 'Prenatal Masaj'
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Terapist Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Terapist Ekle
        </Button>
      </Box>

      {/* 1. Terapist Listesi Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Terapist Listesi</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ad Soyad</TableCell>
                <TableCell>Uzmanlık</TableCell>
                <TableCell>Deneyim</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell>Değerlendirme</TableCell>
                <TableCell>Bugünkü Randevular</TableCell>
                <TableCell>Aylık Kazanç</TableCell>
                <TableCell>Müsaitlik</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {therapists.map((therapist) => (
                <TableRow key={therapist.id}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{therapist.name}</TableCell>
                  <TableCell>{therapist.specialty}</TableCell>
                  <TableCell>{therapist.experience} yıl</TableCell>
                  <TableCell>
                    <Chip 
                      label={therapist.status} 
                      color={therapist.status === 'Aktif' ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: 'gold', mr: 0.5, fontSize: 18 }} />
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {therapist.rating}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {therapist.todayAppointments}
                  </TableCell>
                  <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    ₺{therapist.monthlyEarnings.toLocaleString('tr-TR')}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={therapist.availability} 
                      color={
                        therapist.availability === 'Müsait' ? 'success' :
                        therapist.availability === 'Meşgul' ? 'warning' : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        startIcon={<Edit />}
                        onClick={() => handleEdit(therapist)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Düzenle
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => handleDelete(therapist.id)}
                        sx={{ minWidth: 'auto', px: 1 }}
                      >
                        Sil
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Terapist İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Terapist
              </Typography>
              <Typography variant="h4" color="success.main">
                {totalTherapists}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Aktif Terapist
              </Typography>
              <Typography variant="h4" color="primary.main">
                {activeTherapists}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Bugünkü Randevu
              </Typography>
              <Typography variant="h4" color="warning.main">
                {totalTodayAppointments}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Uzmanlık Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Uzmanlık Alanı Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={specialtyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {specialtyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Deneyim Seviyesi Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Deneyim Seviyesi Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196f3" name="Terapist Sayısı" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Terapist Performans Analizi */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Terapist Performans ve Değerlendirme Analizi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'Değerlendirme') return [value, name];
                  if (name === 'Bugünkü Yük') return [value, name];
                  if (name === 'Toplam Seans') return [value, name];
                  return [`₺${value}`, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="rating" fill="#4caf50" name="Değerlendirme" />
                <Bar yAxisId="left" dataKey="todayLoad" fill="#ff9800" name="Bugünkü Yük" />
                <Line yAxisId="right" type="monotone" dataKey="sessions" stroke="#2196f3" strokeWidth={3} name="Toplam Seans" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Toplam Aylık Kazanç
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{totalMonthlyEarnings.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Star sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h6" color="warning.main">
              Ortalama Değerlendirme
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {averageRating}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Ortalama Deneyim
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {averageExperience} yıl
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Terapist Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingTherapist ? 'Terapist Düzenle' : 'Yeni Terapist Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Ad Soyad"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: Elif Yılmaz"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Uzmanlık Alanı</InputLabel>
                  <Select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    label="Uzmanlık Alanı"
                  >
                    {specialties.map((specialty) => (
                      <MenuItem key={specialty} value={specialty}>
                        {specialty}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="experience"
                  label="Deneyim"
                  type="number"
                  value={formData.experience}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">yıl</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="phone"
                  label="Telefon"
                  value={formData.phone}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: 0532 123 4567"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: elif@spa.com"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="workingHours"
                  label="Çalışma Saatleri"
                  value={formData.workingHours}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: 09:00 - 18:00"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Sertifikalar</InputLabel>
                  <Select
                    multiple
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleCertificationsChange}
                    label="Sertifikalar"
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {availableCertifications.map((cert) => (
                      <MenuItem key={cert} value={cert}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type="checkbox"
                            checked={formData.certifications.indexOf(cert) > -1}
                            readOnly
                            style={{ marginRight: 8 }}
                          />
                          {cert}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Durum</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    label="Durum"
                  >
                    <MenuItem value="Aktif">Aktif</MenuItem>
                    <MenuItem value="İzinli">İzinli</MenuItem>
                    <MenuItem value="Pasif">Pasif</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.name || !formData.specialty || !formData.experience || !formData.phone || !formData.email}
          >
            {editingTherapist ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const ProductsContent = () => {
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Lavanta Yağı', 
      category: 'Aromaterapi', 
      stock: 25, 
      minStock: 10,
      price: 85, 
      supplier: 'Natural Care Ltd.',
      unit: 'Şişe',
      lastRestock: '15.07.2025',
      totalValue: 2125,
      usage: 'Yüksek',
      expireDate: '15.01.2026'
    },
    { 
      id: 2, 
      name: 'Sıcak Taş Seti', 
      category: 'Masaj Ekipmanı', 
      stock: 8, 
      minStock: 5,
      price: 450, 
      supplier: 'Spa Equipment Co.',
      unit: 'Set',
      lastRestock: '20.06.2025',
      totalValue: 3600,
      usage: 'Orta',
      expireDate: 'Süresiz'
    },
    { 
      id: 3, 
      name: 'Aloe Vera Jeli', 
      category: 'Cilt Bakımı', 
      stock: 15, 
      minStock: 20,
      price: 35, 
      supplier: 'Organic Beauty',
      unit: 'Tüp',
      lastRestock: '10.07.2025',
      totalValue: 525,
      usage: 'Yüksek',
      expireDate: '10.12.2025'
    },
    { 
      id: 4, 
      name: 'Himalaya Tuzu', 
      category: 'Banyo Tuzları', 
      stock: 40, 
      minStock: 15,
      price: 25, 
      supplier: 'Salt & Minerals Inc.',
      unit: 'Kg',
      lastRestock: '25.07.2025',
      totalValue: 1000,
      usage: 'Orta',
      expireDate: 'Süresiz'
    },
    { 
      id: 5, 
      name: 'Organik Argan Yağı', 
      category: 'Aromaterapi', 
      stock: 12, 
      minStock: 8,
      price: 120, 
      supplier: 'Natural Care Ltd.',
      unit: 'Şişe',
      lastRestock: '18.07.2025',
      totalValue: 1440,
      usage: 'Yüksek',
      expireDate: '18.03.2026'
    },
    { 
      id: 6, 
      name: 'Bambu Havlu Seti', 
      category: 'Tekstil', 
      stock: 30, 
      minStock: 20,
      price: 65, 
      supplier: 'Textile World',
      unit: 'Set',
      lastRestock: '05.07.2025',
      totalValue: 1950,
      usage: 'Yüksek',
      expireDate: 'Süresiz'
    },
    { 
      id: 7, 
      name: 'Papatya Kremi', 
      category: 'Cilt Bakımı', 
      stock: 3, 
      minStock: 10,
      price: 45, 
      supplier: 'Organic Beauty',
      unit: 'Kavanoz',
      lastRestock: '12.06.2025',
      totalValue: 135,
      usage: 'Orta',
      expireDate: '12.11.2025'
    },
    { 
      id: 8, 
      name: 'Eucalyptus Yağı', 
      category: 'Aromaterapi', 
      stock: 0, 
      minStock: 5,
      price: 75, 
      supplier: 'Natural Care Ltd.',
      unit: 'Şişe',
      lastRestock: '28.05.2025',
      totalValue: 0,
      usage: 'Orta',
      expireDate: '28.02.2026'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Aromaterapi',
    stock: '',
    minStock: '',
    price: '',
    supplier: '',
    unit: 'Şişe',
    expireDate: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleClickOpen = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      category: 'Aromaterapi',
      stock: '',
      minStock: '',
      price: '',
      supplier: '',
      unit: 'Şişe',
      expireDate: ''
    });
    setOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      stock: product.stock.toString(),
      minStock: product.minStock.toString(),
      price: product.price.toString(),
      supplier: product.supplier,
      unit: product.unit,
      expireDate: product.expireDate
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleClose = () => {
    setOpen(false);
    setEditingProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.stock && formData.price && formData.supplier) {
      const stockNum = parseInt(formData.stock);
      const priceNum = parseFloat(formData.price);
      const totalValue = stockNum * priceNum;
      
      if (editingProduct) {
        const updatedProduct = {
          ...editingProduct,
          name: formData.name,
          category: formData.category,
          stock: stockNum,
          minStock: parseInt(formData.minStock) || 5,
          price: priceNum,
          supplier: formData.supplier,
          unit: formData.unit,
          expireDate: formData.expireDate || 'Süresiz',
          totalValue: totalValue,
          lastRestock: new Date().toLocaleDateString('tr-TR')
        };
        
        setProducts(prev => prev.map(p => 
          p.id === editingProduct.id ? updatedProduct : p
        ));
      } else {
        const newProduct = {
          id: Math.max(...products.map(p => p.id)) + 1,
          name: formData.name,
          category: formData.category,
          stock: stockNum,
          minStock: parseInt(formData.minStock) || 5,
          price: priceNum,
          supplier: formData.supplier,
          unit: formData.unit,
          expireDate: formData.expireDate || 'Süresiz',
          totalValue: totalValue,
          lastRestock: new Date().toLocaleDateString('tr-TR'),
          usage: 'Orta'
        };
        
        setProducts(prev => [newProduct, ...prev]);
      }
      
      handleClose();
    }
  };

  // Stok İstatistikleri
  const totalProducts = products.length;
  const totalStockValue = products.reduce((sum, p) => sum + p.totalValue, 0);
  const lowStockProducts = products.filter(p => p.stock <= p.minStock && p.stock > 0).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;
  const adequateStockProducts = products.filter(p => p.stock > p.minStock).length;

  // Kategori dağılımı
  const categoryStats = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categoryData = Object.entries(categoryStats).map(([category, count]) => ({
    name: category,
    value: count,
    color: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#00bcd4'][Object.keys(categoryStats).indexOf(category) % 6]
  }));

  // Stok durumu dağılımı
  const stockStatusData = [
    { name: 'Yeterli Stok', value: adequateStockProducts, color: '#4caf50' },
    { name: 'Az Stok', value: lowStockProducts, color: '#ff9800' },
    { name: 'Stok Bitti', value: outOfStockProducts, color: '#f44336' }
  ].filter(item => item.value > 0);

  // Tedarikçi analizi
  const supplierStats = products.reduce((acc, product) => {
    acc[product.supplier] = (acc[product.supplier] || 0) + product.totalValue;
    return acc;
  }, {});

  const supplierData = Object.entries(supplierStats).map(([supplier, value]) => ({
    supplier: supplier.length > 15 ? supplier.substring(0, 15) + '...' : supplier,
    value: value,
    count: products.filter(p => p.supplier === supplier).length
  }));

  // Kullanım sıklığı dağılımı
  const usageStats = products.reduce((acc, product) => {
    acc[product.usage] = (acc[product.usage] || 0) + 1;
    return acc;
  }, {});

  const usageData = Object.entries(usageStats).map(([usage, count]) => ({
    usage,
    count
  }));

  // Mevcut kategoriler ve birimler
  const categories = [
    'Aromaterapi', 'Masaj Ekipmanı', 'Cilt Bakımı', 'Banyo Tuzları',
    'Tekstil', 'Temizlik', 'Hijyen', 'Doğal Ürünler'
  ];

  const units = ['Şişe', 'Tüp', 'Kavanoz', 'Set', 'Kg', 'Litre', 'Adet', 'Paket'];

  const suppliers = [
    'Natural Care Ltd.', 'Spa Equipment Co.', 'Organic Beauty',
    'Salt & Minerals Inc.', 'Textile World', 'Clean & Fresh',
    'Wellness Supply', 'Natural Products Co.'
  ];

  // Stok durumu belirleme fonksiyonu
  const getStockStatus = (product) => {
    if (product.stock === 0) return { status: 'Bitti', color: 'error' };
    if (product.stock <= product.minStock) return { status: 'Az', color: 'warning' };
    return { status: 'Yeterli', color: 'success' };
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Stok ve Envanter Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Yeni Ürün Ekle
        </Button>
      </Box>

      {/* 1. Ürün Envanteri Tablosu - En Üst */}
      <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
        <Typography variant="h6" gutterBottom>Ürün Envanteri</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ürün Adı</TableCell>
                <TableCell>Kategori</TableCell>
                <TableCell>Stok</TableCell>
                <TableCell>Min. Stok</TableCell>
                <TableCell>Birim Fiyat</TableCell>
                <TableCell>Toplam Değer</TableCell>
                <TableCell>Tedarikçi</TableCell>
                <TableCell>Son Tarih</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell align="center">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const stockStatus = getStockStatus(product);
                return (
                  <TableRow key={product.id}>
                    <TableCell sx={{ fontWeight: 'medium' }}>{product.name}</TableCell>
                    <TableCell>
                      <Chip 
                        label={product.category} 
                        size="small"
                        color={
                          product.category === 'Aromaterapi' ? 'success' :
                          product.category === 'Cilt Bakımı' ? 'primary' :
                          product.category === 'Masaj Ekipmanı' ? 'secondary' : 'info'
                        }
                      />
                    </TableCell>
                    <TableCell sx={{ 
                      textAlign: 'center', 
                      fontWeight: 'bold',
                      color: stockStatus.color + '.main'
                    }}>
                      {product.stock} {product.unit}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {product.minStock} {product.unit}
                    </TableCell>
                    <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>
                      ₺{product.price.toLocaleString('tr-TR')}
                    </TableCell>
                    <TableCell sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      ₺{product.totalValue.toLocaleString('tr-TR')}
                    </TableCell>
                    <TableCell>{product.supplier}</TableCell>
                    <TableCell sx={{ 
                      color: product.expireDate !== 'Süresiz' && 
                             new Date(product.expireDate.split('.').reverse().join('-')) < new Date(Date.now() + 90*24*60*60*1000) 
                             ? 'warning.main' : 'text.primary'
                    }}>
                      {product.expireDate}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={stockStatus.status} 
                        color={stockStatus.color}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                        <Button
                          size="small"
                          variant="outlined"
                          color="primary"
                          startIcon={<Edit />}
                          onClick={() => handleEdit(product)}
                          sx={{ minWidth: 'auto', px: 1 }}
                        >
                          Düzenle
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          startIcon={<Delete />}
                          onClick={() => handleDelete(product.id)}
                          sx={{ minWidth: 'auto', px: 1 }}
                        >
                          Sil
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2. Stok İstatistikleri Kartları */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Toplam Ürün
              </Typography>
              <Typography variant="h4" color="success.main">
                {totalProducts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 152, 0, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Stok Azalan
              </Typography>
              <Typography variant="h4" color="warning.main">
                {lowStockProducts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(244, 67, 54, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Stok Biten
              </Typography>
              <Typography variant="h4" color="error.main">
                {outOfStockProducts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Kategori Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Ürün Kategori Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Stok Durumu Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Stok Durumu Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={stockStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stockStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Tedarikçi Değer Analizi */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Tedarikçi Bazında Stok Değeri ve Ürün Sayısı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={supplierData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="supplier" angle={-45} textAnchor="end" height={100} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'Ürün Sayısı') return [value, name];
                  return [`₺${value.toLocaleString('tr-TR')}`, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="value" fill="#4caf50" name="Stok Değeri (₺)" />
                <Line yAxisId="right" type="monotone" dataKey="count" stroke="#2196f3" strokeWidth={3} name="Ürün Sayısı" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. Genel İstatistikler - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Toplam Stok Değeri
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{totalStockValue.toLocaleString('tr-TR')}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Stok Yeterlilik Oranı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{totalProducts > 0 ? Math.round((adequateStockProducts / totalProducts) * 100) : 0}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Inventory sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h6" color="warning.main">
              Ortalama Ürün Değeri
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              ₺{totalProducts > 0 ? Math.round(totalStockValue / totalProducts).toLocaleString('tr-TR') : 0}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Ürün Ekleme/Düzenleme Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingProduct ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  label="Ürün Adı"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: Lavanta Yağı"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Kategori</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    label="Kategori"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="stock"
                  label="Stok Miktarı"
                  type="number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="minStock"
                  label="Minimum Stok"
                  type="number"
                  value={formData.minStock}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Birim</InputLabel>
                  <Select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    label="Birim"
                  >
                    {units.map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="price"
                  label="Birim Fiyat"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₺</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Tedarikçi</InputLabel>
                  <Select
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleInputChange}
                    label="Tedarikçi"
                  >
                    {suppliers.map((supplier) => (
                      <MenuItem key={supplier} value={supplier}>
                        {supplier}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="expireDate"
                  label="Son Kullanma Tarihi"
                  value={formData.expireDate}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ mb: 2 }}
                  placeholder="örn: 15.01.2026 (boş bırakılırsa 'Süresiz' olur)"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!formData.name || !formData.stock || !formData.price || !formData.supplier}
          >
            {editingProduct ? 'Güncelle' : 'Ekle'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const ReportsContent = () => {
  const [reportData] = useState({
    dailyRevenue: 12500,
    weeklyRevenue: 78500,
    monthlyRevenue: 285000,
    yearlyRevenue: 3250000,
    totalClients: 245,
    newClientsThisMonth: 32,
    averageSessionPrice: 485,
    mostPopularTreatment: 'İsveç Masajı',
    topTherapist: 'Elif Yılmaz',
    totalSessions: 1584,
    completionRate: 94.5,
    customerSatisfaction: 4.8,
    repeatClientRate: 78
  });

  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [reportType, setReportType] = useState('revenue');

  // Gelir Trend Verileri
  const revenueData = [
    { month: 'Ocak', gelir: 245000, hedef: 250000, gider: 98000 },
    { month: 'Şubat', gelir: 268000, hedef: 260000, gider: 105000 },
    { month: 'Mart', gelir: 285000, hedef: 270000, gider: 112000 },
    { month: 'Nisan', gelir: 298000, hedef: 280000, gider: 118000 },
    { month: 'Mayıs', gelir: 312000, hedef: 290000, gider: 125000 },
    { month: 'Haziran', gelir: 325000, hedef: 300000, gider: 130000 },
    { month: 'Temmuz', gelir: reportData.monthlyRevenue, hedef: 310000, gider: 135000 }
  ];

  // Tedavi Popülerlik Verileri
  const treatmentData = [
    { name: 'İsveç Masajı', sessions: 285, revenue: 128250, color: '#4caf50' },
    { name: 'Aromaterapi', sessions: 210, revenue: 136500, color: '#2196f3' },
    { name: 'Cilt Bakımı', sessions: 175, revenue: 96250, color: '#ff9800' },
    { name: 'Hidroterapi', sessions: 158, revenue: 63200, color: '#9c27b0' },
    { name: 'Sıcak Taş Masajı', sessions: 142, revenue: 106500, color: '#f44336' },
    { name: 'Diğer', sessions: 614, revenue: 154300, color: '#00bcd4' }
  ];

  // Terapist Performans Verileri
  const therapistData = [
    { name: 'Elif Yılmaz', sessions: 324, revenue: 145800, rating: 4.9, efficiency: 95 },
    { name: 'Ahmet Öz', sessions: 298, revenue: 193700, rating: 4.8, efficiency: 92 },
    { name: 'Selin Can', sessions: 245, revenue: 134750, rating: 4.7, efficiency: 88 },
    { name: 'Murat Demir', sessions: 268, revenue: 107200, rating: 4.6, efficiency: 91 },
    { name: 'Ayşe Kaya', sessions: 285, revenue: 162200, rating: 4.8, efficiency: 94 },
    { name: 'Can Özkan', sessions: 164, revenue: 141400, rating: 4.9, efficiency: 96 }
  ];

  // Müşteri Analiz Verileri
  const clientAnalysisData = [
    { month: 'Ocak', yeni: 28, tekrar: 156, toplam: 184 },
    { month: 'Şubat', yeni: 35, tekrar: 168, toplam: 203 },
    { month: 'Mart', yeni: 42, tekrar: 175, toplam: 217 },
    { month: 'Nisan', yeni: 38, tekrar: 182, toplam: 220 },
    { month: 'Mayıs', yeni: 45, tekrar: 189, toplam: 234 },
    { month: 'Haziran', yeni: 41, tekrar: 194, toplam: 235 },
    { month: 'Temmuz', yeni: reportData.newClientsThisMonth, tekrar: 198, toplam: 230 }
  ];

  // Zaman dilimi analizi
  const timeAnalysisData = [
    { saat: '09:00', randevu: 12, doluluk: 75 },
    { saat: '10:00', randevu: 18, doluluk: 95 },
    { saat: '11:00', randevu: 22, doluluk: 100 },
    { saat: '12:00', randevu: 16, doluluk: 85 },
    { saat: '13:00', randevu: 8, doluluk: 45 },
    { saat: '14:00', randevu: 24, doluluk: 100 },
    { saat: '15:00', randevu: 26, doluluk: 100 },
    { saat: '16:00', randevu: 20, doluluk: 90 },
    { saat: '17:00', randevu: 14, doluluk: 80 },
    { saat: '18:00', randevu: 10, doluluk: 60 }
  ];

  // İstatistikler
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.gelir, 0);
  const totalExpenses = revenueData.reduce((sum, item) => sum + item.gider, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = ((netProfit / totalRevenue) * 100).toFixed(1);
  const growthRate = ((reportData.monthlyRevenue - revenueData[revenueData.length - 2].gelir) / revenueData[revenueData.length - 2].gelir * 100).toFixed(1);

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleDownloadReport = (type) => {
    // Rapor indirme işlevi
    alert(`${type} raporu indiriliyor...`);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Raporlar ve Analizler
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Dönem</InputLabel>
            <Select
              value={selectedPeriod}
              onChange={handlePeriodChange}
              label="Dönem"
            >
              <MenuItem value="daily">Günlük</MenuItem>
              <MenuItem value="weekly">Haftalık</MenuItem>
              <MenuItem value="monthly">Aylık</MenuItem>
              <MenuItem value="yearly">Yıllık</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Rapor Türü</InputLabel>
            <Select
              value={reportType}
              onChange={handleReportTypeChange}
              label="Rapor Türü"
            >
              <MenuItem value="revenue">Gelir</MenuItem>
              <MenuItem value="clients">Müşteri</MenuItem>
              <MenuItem value="treatments">Tedavi</MenuItem>
              <MenuItem value="staff">Personel</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* 1. KPI Kartları - En Üst */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(76, 175, 80, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Günlük Gelir
              </Typography>
              <Typography variant="h4" color="success.main">
                ₺{reportData.dailyRevenue.toLocaleString('tr-TR')}
              </Typography>
              <Typography variant="caption" color="success.main">
                +8.5% dün'e göre
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(33, 150, 243, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Haftalık Gelir
              </Typography>
              <Typography variant="h4" color="primary.main">
                ₺{reportData.weeklyRevenue.toLocaleString('tr-TR')}
              </Typography>
              <Typography variant="caption" color="primary.main">
                +12.3% geçen haftaya göre
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(156, 39, 176, 0.1)', width: '350px' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Aylık Gelir
              </Typography>
              <Typography variant="h4" color="secondary.main">
                ₺{reportData.monthlyRevenue.toLocaleString('tr-TR')}
              </Typography>
              <Typography variant="caption" color="secondary.main">
                +{growthRate}% geçen aya göre
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 2. Performans Özeti ve Hızlı Eylemler */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '500px' }}>
            <Typography variant="h6" gutterBottom>Performans Özeti</Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mb: 2, p: 2, bgcolor: 'rgba(76, 175, 80, 0.1)', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                  📈 Bu Ay Yeni Müşteri: {reportData.newClientsThisMonth}
                </Typography>
                <Typography variant="caption">Hedef: 30 müşteri (106.7% tamamlandı)</Typography>
              </Box>
              
              <Box sx={{ mb: 2, p: 2, bgcolor: 'rgba(33, 150, 243, 0.1)', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                  💰 Ortalama Seans Fiyatı: ₺{reportData.averageSessionPrice}
                </Typography>
                <Typography variant="caption">Geçen aya göre +₺25 artış</Typography>
              </Box>
              
              <Box sx={{ mb: 2, p: 2, bgcolor: 'rgba(255, 152, 0, 0.1)', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                  🏆 En Popüler Tedavi: {reportData.mostPopularTreatment}
                </Typography>
                <Typography variant="caption">285 seans ({((285/1584)*100).toFixed(1)}% pay)</Typography>
              </Box>
              
              <Box sx={{ p: 2, bgcolor: 'rgba(156, 39, 176, 0.1)', borderRadius: 2 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
                  ⭐ En İyi Terapist: {reportData.topTherapist}
                </Typography>
                <Typography variant="caption">4.9/5.0 müşteri puanı, 324 seans</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', height: '500px' }}>
            <Typography variant="h6" gutterBottom>Hızlı Rapor İndirme</Typography>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Button 
                variant="outlined" 
                startIcon={<Assessment />}
                onClick={() => handleDownloadReport('monthly')}
                sx={{ justifyContent: 'flex-start' }}
              >
                Aylık Gelir Raporu
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<Person />}
                onClick={() => handleDownloadReport('client')}
                sx={{ justifyContent: 'flex-start' }}
              >
                Müşteri Analiz Raporu
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<Star />}
                onClick={() => handleDownloadReport('therapist')}
                sx={{ justifyContent: 'flex-start' }}
              >
                Terapist Performans Raporu
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<TrendingUp />}
                onClick={() => handleDownloadReport('treatment')}
                sx={{ justifyContent: 'flex-start' }}
              >
                Tedavi Popülerlik Raporu
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<Schedule />}
                onClick={() => handleDownloadReport('capacity')}
                sx={{ justifyContent: 'flex-start' }}
              >
                Kapasite Kullanım Raporu
              </Button>
              <Button 
                variant="contained" 
                startIcon={<FileDownload />}
                onClick={() => handleDownloadReport('comprehensive')}
                sx={{ 
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  justifyContent: 'flex-start' 
                }}
              >
                Kapsamlı Analiz Raporu
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* 3. Grafikler Bölümü */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* Gelir Trend Analizi */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Aylık Gelir Trend Analizi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₺${value.toLocaleString('tr-TR')}`, '']} />
                <Legend />
                <Bar dataKey="gelir" fill="#4caf50" name="Gerçekleşen Gelir" />
                <Line type="monotone" dataKey="hedef" stroke="#ff9800" strokeWidth={3} name="Hedef" />
                <Line type="monotone" dataKey="gider" stroke="#f44336" strokeWidth={2} name="Gider" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Tedavi Popülerlik Dağılımı */}
        <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Tedavi Popülerlik Dağılımı
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={treatmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, sessions, percent }) => `${name}: ${sessions} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="sessions"
                >
                  {treatmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} seans`, '']} />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Terapist Performans Karşılaştırması */}
        <Grid item xs={12}>
          <Paper elevation={10} sx={{ p: 4, backdropFilter: 'blur(10px)', height: '500px', width: '420px' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
              Terapist Performans ve Verimlilik Analizi
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <ComposedChart data={therapistData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'Seans Sayısı') return [value, name];
                  if (name === 'Verimlilik (%)') return [`%${value}`, name];
                  if (name === 'Değerlendirme') return [value, name];
                  return [`₺${value.toLocaleString('tr-TR')}`, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="sessions" fill="#2196f3" name="Seans Sayısı" />
                <Bar yAxisId="left" dataKey="efficiency" fill="#4caf50" name="Verimlilik (%)" />
                <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#ff9800" strokeWidth={3} name="Değerlendirme" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* 4. İstatistik Kartları - En Alt */}
      <Grid container spacing={19} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <MonetizationOn sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h6" color="success.main">
              Net Kar Marjı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{profitMargin}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h6" color="primary.main">
              Müşteri Memnuniyeti
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {reportData.customerSatisfaction}/5.0
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', textAlign: 'center', width: '350px' }}>
            <Person sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h6" color="warning.main">
              Tekrar Müşteri Oranı
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              %{reportData.repeatClientRate}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const SettingsContent = () => {
  const [settings, setSettings] = useState({
    // Genel Ayarlar
    spaName: 'Serenity Spa & Wellness',
    currency: 'TL',
    language: 'TR',
    timezone: 'Europe/Istanbul',
    taxRate: 18,
    workingHours: {
      start: '09:00',
      end: '20:00'
    },
    appointmentDuration: 60,
    bufferTime: 15,
    
    // İletişim Bilgileri
    phone: '+90 352 123 4567',
    email: 'info@serenityspa.com',
    website: 'www.serenityspa.com',
    address: 'Kocasinan Mah. Wellness Sk. No:123 Kayseri',
    
    // Bildirim Ayarları
    emailNotifications: true,
    smsNotifications: true,
    appointmentReminders: true,
    marketingEmails: false,
    
    // Güvenlik Ayarları
    passwordExpiry: 90,
    sessionTimeout: 30,
    twoFactorAuth: false,
    loginAttempts: 3,
    
    // Sistem Ayarları
    autoBackup: true,
    backupFrequency: 'daily',
    maintenanceMode: false,
    debugMode: false,
    
    // Fiyatlandırma
    discountLimit: 50,
    refundPolicy: 48,
    cancellationPolicy: 24,
    lateFee: 25
  });

  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSave = (section) => {
    setAlertMessage(`${section} ayarları başarıyla kaydedildi!`);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };

  const handleReset = (section) => {
    setAlertMessage(`${section} ayarları varsayılana sıfırlandı!`);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const updateSettings = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedSettings = (parent, field, value) => {
    setSettings(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Sistem Ayarları
        </Typography>
        <Chip 
          label="Ayarlar Merkezi" 
          color="primary" 
          icon={<Settings />}
          sx={{ fontSize: '1rem', py: 2 }}
        />
      </Box>

      {/* Tab Navigasyonu */}
      <Paper elevation={10} sx={{ mb: 3, backdropFilter: 'blur(10px)' }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Genel" icon={<Settings />} />
          <Tab label="İletişim" icon={<ContactPhone />} />
          <Tab label="Bildirimler" icon={<Notifications />} />
          <Tab label="Güvenlik" icon={<Security />} />
          <Tab label="Sistem" icon={<Storage />} />
          <Tab label="Fiyatlandırma" icon={<MonetizationOn />} />
        </Tabs>
      </Paper>

      {/* Tab İçerikleri */}
      
      {/* Genel Ayarlar - Tab 0 */}
      {activeTab === 0 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Settings /> Genel Ayarlar
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Spa Adı"
                value={settings.spaName}
                onChange={(e) => updateSettings('spaName', e.target.value)}
                margin="normal"
                helperText="Sistemde görüntülenecek spa adı"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Para Birimi"
                value={settings.currency}
                onChange={(e) => updateSettings('currency', e.target.value)}
                margin="normal"
                helperText="Tüm fiyatlar bu para biriminde gösterilir"
              >
                <MenuItem value="TL">Türk Lirası (₺)</MenuItem>
                <MenuItem value="USD">Dolar ($)</MenuItem>
                <MenuItem value="EUR">Euro (€)</MenuItem>
                <MenuItem value="GBP">Sterlin (£)</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Dil"
                value={settings.language}
                onChange={(e) => updateSettings('language', e.target.value)}
                margin="normal"
                helperText="Sistem dili"
              >
                <MenuItem value="TR">Türkçe</MenuItem>
                <MenuItem value="EN">English</MenuItem>
                <MenuItem value="DE">Deutsch</MenuItem>
                <MenuItem value="FR">Français</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Zaman Dilimi"
                value={settings.timezone}
                onChange={(e) => updateSettings('timezone', e.target.value)}
                margin="normal"
                helperText="Randevu ve raporlar için zaman dilimi"
              >
                <MenuItem value="Europe/Istanbul">İstanbul (GMT+3)</MenuItem>
                <MenuItem value="Europe/London">Londra (GMT+0)</MenuItem>
                <MenuItem value="America/New_York">New York (GMT-5)</MenuItem>
                <MenuItem value="Asia/Tokyo">Tokyo (GMT+9)</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Vergi Oranı (%)"
                type="number"
                value={settings.taxRate}
                onChange={(e) => updateSettings('taxRate', parseFloat(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0, max: 100 } }}
                helperText="KDV oranı"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Varsayılan Randevu Süresi (dk)"
                type="number"
                value={settings.appointmentDuration}
                onChange={(e) => updateSettings('appointmentDuration', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 15, max: 480 } }}
                helperText="Yeni randevular için varsayılan süre"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Çalışma Başlangıç Saati"
                type="time"
                value={settings.workingHours.start}
                onChange={(e) => updateNestedSettings('workingHours', 'start', e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                helperText="Günlük çalışma başlangıç saati"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Çalışma Bitiş Saati"
                type="time"
                value={settings.workingHours.end}
                onChange={(e) => updateNestedSettings('workingHours', 'end', e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                helperText="Günlük çalışma bitiş saati"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Randevular Arası Süre (dk)"
                type="number"
                value={settings.bufferTime}
                onChange={(e) => updateSettings('bufferTime', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0, max: 60 } }}
                helperText="Temizlik ve hazırlık için ara süre"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('Genel')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('Genel')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* İletişim Bilgileri - Tab 1 */}
      {activeTab === 1 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ContactPhone /> İletişim Bilgileri
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Telefon"
                value={settings.phone}
                onChange={(e) => updateSettings('phone', e.target.value)}
                margin="normal"
                placeholder="+90 352 123 4567"
                helperText="Ana iletişim telefonu"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="E-posta"
                type="email"
                value={settings.email}
                onChange={(e) => updateSettings('email', e.target.value)}
                margin="normal"
                placeholder="info@spa.com"
                helperText="Resmi e-posta adresi"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Website"
                value={settings.website}
                onChange={(e) => updateSettings('website', e.target.value)}
                margin="normal"
                placeholder="www.spa.com"
                helperText="Website adresi"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Adres"
                value={settings.address}
                onChange={(e) => updateSettings('address', e.target.value)}
                margin="normal"
                multiline
                rows={3}
                helperText="Tam adres bilgisi"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('İletişim')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('İletişim')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* Bildirim Ayarları - Tab 2 */}
      {activeTab === 2 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Notifications /> Bildirim Ayarları
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Genel Bildirimler
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.emailNotifications}
                      onChange={(e) => updateSettings('emailNotifications', e.target.checked)}
                    />
                  }
                  label="E-posta Bildirimleri"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.smsNotifications}
                      onChange={(e) => updateSettings('smsNotifications', e.target.checked)}
                    />
                  }
                  label="SMS Bildirimleri"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.appointmentReminders}
                      onChange={(e) => updateSettings('appointmentReminders', e.target.checked)}
                    />
                  }
                  label="Randevu Hatırlatmaları"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.marketingEmails}
                      onChange={(e) => updateSettings('marketingEmails', e.target.checked)}
                    />
                  }
                  label="Pazarlama E-postaları"
                />
              </FormGroup>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('Bildirim')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('Bildirim')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* Güvenlik Ayarları - Tab 3 */}
      {activeTab === 3 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Security /> Güvenlik Ayarları
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Şifre Geçerlilik Süresi (gün)"
                type="number"
                value={settings.passwordExpiry}
                onChange={(e) => updateSettings('passwordExpiry', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 30, max: 365 } }}
                helperText="Şifre ne kadar sürede yenilenmeli"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Oturum Zaman Aşımı (dk)"
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => updateSettings('sessionTimeout', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 5, max: 480 } }}
                helperText="Pasif kalma durumunda otomatik çıkış"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Maksimum Giriş Denemesi"
                type="number"
                value={settings.loginAttempts}
                onChange={(e) => updateSettings('loginAttempts', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                helperText="Hesap kilitlenmeden önce deneme sayısı"
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.twoFactorAuth}
                      onChange={(e) => updateSettings('twoFactorAuth', e.target.checked)}
                    />
                  }
                  label="İki Faktörlü Doğrulama"
                />
              </FormGroup>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('Güvenlik')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('Güvenlik')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* Sistem Ayarları - Tab 4 */}
      {activeTab === 4 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Storage /> Sistem Ayarları
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Yedekleme Sıklığı"
                value={settings.backupFrequency}
                onChange={(e) => updateSettings('backupFrequency', e.target.value)}
                margin="normal"
                helperText="Otomatik yedekleme sıklığı"
              >
                <MenuItem value="hourly">Saatlik</MenuItem>
                <MenuItem value="daily">Günlük</MenuItem>
                <MenuItem value="weekly">Haftalık</MenuItem>
                <MenuItem value="monthly">Aylık</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.autoBackup}
                      onChange={(e) => updateSettings('autoBackup', e.target.checked)}
                    />
                  }
                  label="Otomatik Yedekleme"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.maintenanceMode}
                      onChange={(e) => updateSettings('maintenanceMode', e.target.checked)}
                    />
                  }
                  label="Bakım Modu"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.debugMode}
                      onChange={(e) => updateSettings('debugMode', e.target.checked)}
                    />
                  }
                  label="Hata Ayıklama Modu"
                />
              </FormGroup>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('Sistem')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('Sistem')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* Fiyatlandırma Ayarları - Tab 5 */}
      {activeTab === 5 && (
        <Paper elevation={10} sx={{ p: 3, backdropFilter: 'blur(10px)', mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MonetizationOn /> Fiyatlandırma ve Politikalar
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Maksimum İndirim Oranı (%)"
                type="number"
                value={settings.discountLimit}
                onChange={(e) => updateSettings('discountLimit', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0, max: 100 } }}
                helperText="Verilebilecek maksimum indirim"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="İade Politikası (saat)"
                type="number"
                value={settings.refundPolicy}
                onChange={(e) => updateSettings('refundPolicy', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0, max: 168 } }}
                helperText="İade için minimum süre"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="İptal Politikası (saat)"
                type="number"
                value={settings.cancellationPolicy}
                onChange={(e) => updateSettings('cancellationPolicy', parseInt(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0, max: 168 } }}
                helperText="Ücretsiz iptal için minimum süre"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Geç Kalma Ücreti (₺)"
                type="number"
                value={settings.lateFee}
                onChange={(e) => updateSettings('lateFee', parseFloat(e.target.value))}
                margin="normal"
                InputProps={{ inputProps: { min: 0 } }}
                helperText="Geç kalma durumunda ek ücret"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={() => handleSave('Fiyatlandırma')}>
              Kaydet
            </Button>
            <Button variant="outlined" onClick={() => handleReset('Fiyatlandırma')}>
              Sıfırla
            </Button>
          </Box>
        </Paper>
      )}

      {/* Başarı Mesajı */}
      {open && (
        <Alert 
          severity="success" 
          sx={{ 
            position: 'fixed', 
            top: 20, 
            right: 20, 
            zIndex: 9999,
            minWidth: 300
          }}
          onClose={() => setOpen(false)}
        >
          {alertMessage}
        </Alert>
      )}
    </Box>
  );
};

const SpaManagementDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate()
  
  // drawerWidth değişkenini tanımlayın
  const drawerWidth = 280;

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#81c784' : '#4caf50',
      },
      secondary: {
        main: darkMode ? '#ce93d8' : '#9c27b0',
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    navigate('/');
  };


  const renderPageContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Ödemeler':
        return <PaymentContent />;
      case 'Tedaviler':
        return <TreatmentsContent />;
      case 'Randevular':
        return <AppointmentsContent />;
      case 'Müşteriler':
        return <ClientsContent />;
      case 'Paketler':
        return <PackagesContent />;
      case 'Terapistler':
        return <TherapistsContent />;
      case 'Ürünler':
        return <ProductsContent />;
      case 'Raporlar':
        return <ReportsContent />;
      case 'Ayarlar':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Ödemeler', icon: <PaymentIcon /> },
    { text: 'Tedaviler', icon: <SpaIcon /> },
    { text: 'Randevular', icon: <AppointmentIcon /> },
    { text: 'Müşteriler', icon: <ClientsIcon /> },
    { text: 'Paketler', icon: <PackagesIcon /> },
    { text: 'Terapistler', icon: <TherapistIcon /> },
    { text: 'Ürünler', icon: <ProductsIcon /> },
    { text: 'Raporlar', icon: <ReportsIcon /> },
  ];
  useEffect(() => {
    document.title = `Algentem Spa - ${activePage}`;
  }, [activePage]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <FloatingCircles />
      
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Permanent Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              height: '100vh',
              borderRight: 'none',
              backgroundColor: darkMode ? 'rgba(15, 32, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              transition: 'background-color 0.3s',
              position: 'fixed', // fixed yerine relative
              top: 0,
              left:0,
              zIndex: 1200
            },
          }}
          open
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
              <SpaIcon />
            </Avatar>
            <Box>
              <Typography variant="subtitle1">Admin</Typography>
              <Typography variant="caption" color="textSecondary">Spa Manager</Typography>
            </Box>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                selected={activePage === item.text}
                onClick={() => setActivePage(item.text)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: darkMode ? 'rgba(129, 199, 132, 0.3)' : 'rgba(76, 175, 80, 0.1)',
                  },
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                  }
                }}
              >
                <ListItemIcon sx={{ color: activePage === item.text ? 'success.main' : 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem 
              button
              selected={activePage === 'Ayarlar'}
              onClick={() => setActivePage('Ayarlar')}
            >
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Ayarlar" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Çıkış Yap" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: '100%',
            backgroundColor: 'transparent',
            minHeight: '100vh',
            position: 'relative'
          }}
        >
          {/* Top Bar */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4
          }}>
            <Typography variant="h4" component="h1" sx={{ color: 'success.main', fontWeight: 'bold' }}>
              {activePage}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={darkMode} onChange={toggleDarkMode} />
                  }
                  label={darkMode ? <Brightness7 /> : <Brightness4 />}
                />
              </FormGroup>
            </Box>
          </Box>
          
          {/* Active page content */}
          {renderPageContent()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SpaManagementDashboard;
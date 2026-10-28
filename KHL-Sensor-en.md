# Kelvin Hydrodynamics Laboratory Tank-Testing Sensor Handbook

## Table of Contents

**Handbook Notes**

- Scope and Content of the Handbook
- Terminology and Conventions

**Part 1 KHL Test Facilities**

- 1.1 Main Facilities and Existing Measurement Capabilities

**Part 2 Measurement Methods by Physical Quantity**

- 2.1 Free-Surface Elevation
- 2.2 Forces and Moments
- 2.3 Pressure
- 2.4 Flow Velocity and Turbulence
- 2.5 Rigid-Body Motion and Attitude
- 2.6 Acceleration and Vibration
- 2.7 Strain and Deformation
- 2.8 Displacement and Gaps
- 2.9 Torque and Rotational Speed
- 2.10 Temperature
- 2.11 Hydrology and Water Quality
- 2.12 Meteorology and Wind
- 2.13 Position and Navigation
- 2.14 Acoustics and Underwater Sensing
- 2.15 Terrain and Geophysics
- 2.16 Corrosion and Cathodic Protection
- 2.17 Distributed Fibre-Optic Sensing
- 2.18 Optical and Image-Based Measurement

**Part 3 Data Acquisition Systems and Sensor Interfaces**

- 3.1 Types of Acquisition System
- 3.2 Signal Types and Conditioning

**Part 4 Supplier Reference**

**References**

**Appendices**

- Appendix A Abbreviations and Full English Terms
- Appendix B Standards and Specification References
- Appendix C Supplier Channels and Websites

## Handbook Notes

### Scope and Content of the Handbook

The handbook focuses primarily on tank model tests; field sea trials and long-term monitoring are placed in the same physical-quantity sections as application-scenario descriptions.

Part 1 introduces the main test facilities of the KHL and the existing measurement capabilities. Part 2 lists, for each physical quantity, the measurement target, measurement principle, applicable scenarios, calibration and uncertainty, common errors, and representative models, specifications, and prices. Part 3 introduces the types of acquisition system and signal conditioning. Part 4 lists the main suppliers by application, with websites given in Appendix C.

### Terminology and Conventions

"Tank test" refers to model-scale tests carried out in the KHL's main towing tank, compact wave tank, and fully turbulent flow flume; "field sea trial" refers to short- to medium-term measurements carried out in real waters; "long-term monitoring" refers to observations lasting from several months to several years on offshore structures or subsea installations.

Contact measurement requires contact with the water body or the structure; a probe entering the water, surface bonding, or a mechanical connection all belong to this category. Non-contact measurement obtains signals by optical, acoustic, electromagnetic, or similar means. Point measurement gives the time history at one location; full-field measurement gives a distribution over a plane or a volume. A directly measured quantity is the quantity that the sensor first senses or outputs; the target quantity may be converted through a calibration relationship, and may also require integration, geometric reconstruction, or inversion through a physical model.

Measurement uncertainty components are divided by the method of evaluation into Type A and Type B: Type A is evaluated by statistical methods from repeated measurements, and Type B is evaluated from non-statistical information such as calibration certificates and manufacturer specifications; the two types of components are combined to give the standard uncertainty.

## Part 1 KHL Test Facilities

### 1.1 Main Facilities and Existing Measurement Capabilities

The KHL's tank facilities comprise three installations: the main towing tank, the compact wave tank, and the fully turbulent flow flume.

#### 1.1.1 Main Towing Tank

The parameters of the main towing tank are as follows.

| Item | Parameter |
| --- | --- |
| Tank dimensions | 76 m × 4.6 m × 2.5 m |
| Carriage | Computer-controlled digitally driven carriage with a digitally controlled sub-carriage; maximum speed 5 m/s |
| Wave generation | Variable-depth, computer-controlled four-flap absorbing wavemaker capable of generating regular and irregular waves; wave heights above 0.5 m (limited by water depth), with long-crested waves up to 0.7 m |
| Wave absorption | Variable-depth sloping beach; reflection coefficient typically below 5% in the frequency range of interest |
| Data acquisition | PC-based modular acquisition and control system; up to 64 input and 20 output channels; sampling rates up to 60 kHz |
| Model scale | Maximum ship length about 4 m; marine energy devices at 1:50 to 1:25 scale |

The range of applications includes ship resistance and seakeeping, survivability of floating and damaged vessels, hydrodynamics of towed and submerged bodies, vortex-induced vibration and vortex-induced motion (structural vibration and motion caused by periodic vortex shedding in flow around a bluff body), wave slamming (localised wave impact on a structure) and green water (waves shipping onto the deck), performance and survivability of marine energy devices, and moving-body hydrodynamics. The instrumentation includes up to 25 wave probes, a real-time non-contact infrared optical motion-capture system, several resistance dynamometers and a six-component force balance, a three-axis flow-velocity measurement system, a particle image velocimetry (PIV) system, model surface-pressure measurement capability, and above-water and underwater video systems; the tank also provides a self-propulsion dynamometer and has model fabrication and assembly capability (University of Strathclyde, n.d.). Research areas include ships, offshore oil and gas platforms, and offshore renewable energy devices, including fixed and floating wind turbines, tidal devices, and wave energy devices (InfraPortal, n.d.).

#### 1.1.2 Compact Wave Tank

The compact wave tank was commissioned in 2020, with dimensions of 9 m × 3.2 m × 1 m. It can generate multidirectional waves (three-dimensional waves with directional spread), and the tank walls are fitted with optical observation windows. It is used for fundamental research and low-technology-readiness-level research (InfraPortal, n.d.).

#### 1.1.3 Fully Turbulent Flow Flume

The fully turbulent flow flume is equipped with high-speed stereo PIV for near-wall flow research, and can operate in both fresh water and salt water (InfraPortal, n.d.).

## Part 2 Measurement Methods by Physical Quantity

### 2.1 Free-Surface Elevation

#### 2.1.1 Measurement Target and Criteria

The directly measured quantity is the distribution of free-surface elevation in time and space. The quantities actually used in engineering and research are derived quantities: characteristic wave heights and periods, wave spectra and directional spectra (the distribution of wave energy over frequency and direction), wave-height reflection coefficient (the ratio of reflected wave height to incident wave height; under linear, same-medium conditions the energy ratio is the square of this ratio), wave group structure (the grouping distribution of wave energy in time), nonlinearity indicators (skewness and asymmetry, describing the vertical and horizontal asymmetry of the wave surface respectively), breaking indicators (parameters used to judge whether waves break), and the local phase near a structure (the wave-surface phase at the location of the structure). The ITTC lists wave height, period, spectrum, and dispersion as parameters to be included in the test plan (ITTC 2024, 7.5-02-07-02.1).

There are two common definitions of significant wave height: the time-domain definition is the average of the highest one-third of wave heights (H<sub>1/3</sub>), and the frequency-domain definition is four times the standard deviation of the surface elevation (H<sub>m0</sub>); the two definitions are different, and the definition adopted should be stated when reporting significant wave height (ITTC 2024, 7.5-02-07-02.1). The wave-height distribution in shallow water and in the surf zone can be described by prediction models based on bed slope and deep-water wave steepness, and the spatial distribution of wave groups has corresponding analyses (Mase & Iwagaki, 1982).

Acoustic and capacitance wave probes are commonly used for free-surface measurement. For a wave record referenced to the still-water level and with the mean removed, the regular-wave amplitude can be taken as ζ<sub>A</sub> = √2·rms; the spectral significant wave height of irregular waves is H<sub>m0</sub> = 4·rms = 4√m<sub>0</sub>, where m<sub>0</sub> is the area of the wave-surface elevation spectrum. Under the corresponding narrow-band random-wave approximation, the time-domain significant wave height H<sub>1/3</sub> is approximately equal to this spectral value (ITTC 2024, 7.5-02-07-02.1; ITTC 2014, Symbols).

There are quantitative recommendations on record length and stationarity. The resolution of directional-spectrum analysis is positively related to record length, and longer records are generally recommended for laboratory simulation, for example about 3 hours of full-scale duration (ITTC 2017, 7.5-02-07-01.1, §4.1.4). Simulation generally assumes stationary conditions (wave conditions whose statistical characteristics do not vary with time); if time-varying conditions (conditions whose statistical characteristics vary with time) are to be simulated, several shorter stationary conditions can be joined in sequence (ITTC 2017, 7.5-02-07-01.1, §4.1.5).

Free-surface measurement methods differ mainly in the following respects (ITTC 2024, 7.5-02-07-02.1, §4.1):

- the frequency range of interest
- whether directional information is required
- whether breaking and strongly nonlinear conditions are included
- whether phase consistency among multiple probes is required
- the spatial scale represented by the measured value (the finite size of a probe or array gives a spatial average, which does not correspond one-to-one with the point values of numerical computation)

#### 2.1.2 Comparison of Principle Routes

The eight measurement principles covered in this section are shown in the table below; measurement considerations for breaking-wave conditions are given separately after the table, and are not an independent principle.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Resistive (conductive) | Contact | The conductive path in the water between a two-wire probe | Converted to surface elevation through the calibration relationship between conductive path and immersion length |
| 2. Capacitive | Contact | The capacitance formed by the probe and the water | Converted to surface elevation through the calibration relationship between capacitance and immersion length |
| 3. Ultrasonic (acoustic) | Non-contact | The round-trip time of a sound pulse reflected from the water surface | Distance obtained from round-trip time and sound speed, then converted to surface elevation |
| 4. Pressure inversion | Contact | Underwater pressure | Surface elevation inverted from pressure, water depth, and the wave transfer relationship |
| 5. Optical (stereo photography / laser ranging) | Non-contact | Image coordinates or ranging values | Surface elevation reconstructed / converted from image coordinates or ranging values |
| 6. Buoy motion integration | Contact | Buoy acceleration or GNSS velocity time history | Displacement obtained by double integration of acceleration or integration of velocity |
| 7. Radar / microwave | Non-contact | Microwave signal reflected from the water surface (indirect quantity) | Surface elevation estimated from echo time delay, frequency shift, or image information |
| 8. ADCP (acoustic Doppler current profiler) wave inversion | Non-contact (instrument immersed in water) | Acoustic Doppler velocity profile (indirect quantity) | Wave spectrum and directional spectrum estimated from orbital velocities combined with a wave model |

Range, bandwidth, resolution, and accuracy vary with the measurement principle and the model: pressure and ultrasonic types have ranges of the order of metres to tens of metres; the range of a capacitance wave probe is determined by the probe length; the range of optical and radar methods is determined by the field of view or the beam. The magnitudes and limitations of each principle are given in the individual principle entries below, and representative models and prices are given in 2.1.6.

**1. Resistive (conductive)**

**Working principle:** The probe is a contact measurement consisting of two parallel metal wires; the water body acts as a conductive medium connecting the two wires, and the output varies with immersion length. Resistive probes can be arranged along the hull profile, fixed at two points on the hull to form a straight line, or placed away from the hull as vertical wave probes (ITTC 2024, 7.5-02-07-02.3).

**Typical magnitudes and limitations:** When the water surface exceeds the probe range (the range is determined by the probe length), the signal saturates and additional processing is required; otherwise the root-mean-square (RMS) of the relative motion will be incorrectly evaluated (ITTC 2024, 7.5-02-07-02.3).

**Advantages:** Low cost, robust, can form arrays (ITTC 2017, 7.5-02-07-01.1, §4.3.1), usable in breaking waves (ITTC 2024, 7.5-02-07-02.3; note the range saturation, see 2.1.5).

**Limitations:** When the probe is installed along the hull profile, the immersion depth is not linearly related to the output, and the calibration is nonlinear (ITTC 2024, 7.5-02-07-02.3). Changes in water conductivity affect the calibration; a conductivity cell can be used to monitor water conductivity and stabilise the calibration (Altmann, 1980). Regular cleaning is required.

**2. Capacitive**

**Working principle:** An insulated wire acts as one plate and the water as the other, forming a capacitance that varies with immersion length. Capacitive probes are often made as strips conforming to the hull surface (ITTC 2024, 7.5-02-07-02.3).

**Typical magnitudes and limitations:** Strip-type probes conforming to the hull are difficult to extend beyond the hull (ITTC 2024, 7.5-02-07-02.3).

**Advantages:** Good linearity, small zero drift, no electrode polarisation; can be made as strips conforming to the hull without changing the hull shape (ITTC 2024, 7.5-02-07-02.3). Here drift refers to the slow change of the zero point or sensitivity with time, and polarisation refers to the bias caused by electrochemical effects at the electrode-water interface.

**Limitations:** Water adhering to the hull causes measurement errors (ITTC 2024, 7.5-02-07-02.3). The probe is fragile and costly. Salt water and fresh water require separate calibration.

**3. Ultrasonic (acoustic)**

**Working principle:** Non-contact measurement using an ultrasonic sensor to measure water-level changes in a test tank (Zen et al., 2022). The ITTC lists acoustic wave probes together with capacitance wave probes as the conventional means of free-surface measurement (ITTC 2024, 7.5-02-07-02.1).

**Typical magnitudes and limitations:** The blind zone (the minimum distance after transmission within which the transducer cannot distinguish the echo) and the beam angle (the cone angle over which the acoustic beam spreads) together determine the measurable range: the measured value is an average over the region illuminated by the beam, and the farther the distance, the larger the region; aeration and foam in the breaking zone cause loss of echoes, and steep wave surfaces also deflect echoes away from the receiving direction (ITTC 2024, 7.5-02-07-02.3).

**Advantages:** Non-intrusive; can record freeboard exceedance and propeller emergence without modifying the hull (ITTC 2024, 7.5-02-07-02.3). The measurement point can be relocated and can also move with the carriage, which has been achieved in laboratory-scale tests (Zen et al., 2022).

**Limitations:** Difficult to measure the near-hull swell-up; steep waves may not be detected (ITTC 2024, 7.5-02-07-02.3). The water-level measurement manual notes that acoustic water-level gauges work by the travel time of a sound pulse reflected from the sea surface, and the reflected signal may be lost under certain conditions (IOC, 2006).

**4. Pressure inversion**

**Working principle:** Pressure sensors are placed underwater, and the free surface is inverted from the measured pressure. There is an interdependence among free-surface motion, flow velocity, and water pressure (Dean & Dalrymple, 1991); the inversion of the free surface from pressure is premised on this relationship. Bottom pressure combined with flow velocity can give free-surface kinematics and statistics (Moritz, 2002). In finite and shallow water, pressure sensors can be arranged in arrays on the bottom (ITTC 2017, 7.5-02-07-01.1, §4.3.3).

**Typical magnitudes and limitations:** In deep water, high-frequency components decay rapidly with depth and become undetectable at greater depths; inversion of the free surface from bottom pressure requires attenuation correction according to water depth (and as a function of frequency) (Lyman et al., 2020).

**Advantages:** Low cost, suitable for long-term deployment. Low-cost open-source pressure wave gauges have been realised, with wave-parameter estimates comparable to commercial tide gauges (Villalonga Llauger et al., 2024). Waveform characteristics can also be given indirectly through the wavemaker transfer function (the function describing the relationship between wavemaker input and wave-surface output) (Aldarabseh & Merati, 2023).

**Limitations:** Converting pressure to water level requires knowledge of seawater density and gravitational acceleration; the drift of pressure sensors is concentrated in the reference value, about 1 mm per year, and requires periodic checking (IOC, 2006). Using linear wave theory to process bottom pressure and flow-velocity data may underestimate wave height by about 20% under storm conditions, and current-induced Doppler effects can introduce biases of 2% to 10% (Moritz, 2002). Fails in breaking waves and strong currents.

**5. Optical (stereo photography / laser ranging)**

**Working principle:** The water surface is imaged with cameras, and the free surface is reconstructed through calibration and image processing. Photogrammetry has been used in the laboratory to produce contour maps of wave-height distribution and wave direction (Pos & Kilner, 1982). Multi-camera stereo configurations are used for wave-surface reconstruction in tanks (Wang et al., 2019). Laser ranging obtains the distance from the sensor to the water surface by triangulation or time of flight; when used for free-surface measurement, the mounting datum must also be subtracted, and water-surface refraction and sensor attitude must be handled.

**Typical magnitudes and limitations:** The field of view and water-surface refraction determine the measurable range; scattering and attenuation by the water body limit the penetration distance.

**Advantages:** Full-field and non-contact (Benetazzo et al., 2012); can capture breaking wave surfaces (Wang et al., 2025); can produce contour maps of wave-height distribution and wave direction (Pos & Kilner, 1982).

**Limitations:** Complex calibration, affected by lighting and foam/spray, high computational demand.

**6. Buoy motion integration**

**Working principle:** The buoy follows the water-surface motion, and displacement is obtained from the motion record and used to estimate the directional spectrum. Directional Waverider (Datawell's wave-buoy series) measurement is based on the buoy's own accelerometers, and Spotter (Sofar Ocean's wave buoy) is based on its own velocity measured by a global navigation satellite system (Ewans & Collins, 2026).

**Typical magnitudes and limitations:** Limited low-frequency response.

**Advantages:** Flexible deployment, satellite backhaul possible. The two types of buoy are consistent in vertical measurement (Ding et al., 2025). In intercomparison trials the significant-wave-height differences are less than 7.5% (Brainard & Gardner, 1982). The mooring system does not significantly affect the directional-spectrum measurement capability (Barstow et al., 1994). Global navigation satellite system wave-sensor modules can be added to existing buoys and navigation buoys to give directional wave height (Hoar et al., 2018).

**Limitations:** The surface response of the buoy depends on its design: a small-waterplane-area buoy can be made essentially non-responsive to wave action by adjusting the waterplane area and mass, while a large-waterplane-area buoy (for example a disc buoy) follows the waves (Graber et al., 2000; Herbers et al., 2012). The mooring arrangement affects its response and must be evaluated in the deployment plan. The horizontal-plane displacement of the directional Waverider is overestimated by about 18% (Ding et al., 2025).

**7. Radar / microwave**

**Working principle:** Microwaves are transmitted toward the water surface and the echoes are received, and the free surface is inverted from the echoes. By echo mechanism there are two classes: near-vertical incidence relies on specular reflection from the sea surface, and low grazing angles rely on Bragg scattering, i.e. the echo comes from wind-generated capillary waves matched to the radar wavelength; the intensity and motion of the capillary waves are in turn modulated by the longer gravity waves beneath them (the orbital motion of the long waves locally enhances or weakens the short waves), so the intensity and Doppler frequency of the echo vary accordingly, and the wave information is extracted from this variation (Huang et al., 2017; Young et al., 1985). This type of instrument is particularly useful in situations where direct contact with the water surface is to be avoided and where interference from hull structures is to be avoided (Huang et al., 2017).

**Typical magnitudes and limitations:** The radar footprint (the region illuminated by the beam on the water surface) should be smaller than the shortest wavelength of interest, otherwise the fluctuations in that band will be averaged out in the measurement; the beam diverges with distance and the illuminated region expands, so the resolution decreases (Huang et al., 2017).

**Advantages:** Non-contact, no need to place instruments in the water, usable for platform- or ship-borne measurement (Huang et al., 2017).

**Limitations:** An indirect measurement; the free surface is obtained by inversion from echoes.

**8. Acoustic Doppler current profiler (ADCP) wave inversion**

**Working principle:** The ADCP transmits sound pulses along its beams and obtains the velocity component in each range bin (water layer divided by round-trip time) from the Doppler frequency shift of echoes from scatterers in the water, thereby giving the current-velocity profile over the water column; in wave mode, wave orbital velocities are sampled at high frequency in the water layers near the surface, and the wave spectrum and directional spectrum are then inverted from the orbital velocities according to linear wave theory, so the wave quantities are indirect quantities (Churchill et al., 2006).

**Typical magnitudes and limitations:** The sound-speed calculation assumes salinity to be a preset constant; this setting should be confirmed before deployment to be consistent with the actual waters (Nortek, n.d.-a). There are several directional-spectrum inversion algorithms, with a performance comparison given in Li et al. (2013).

**Advantages:** One instrument gives both the current-velocity profile and wave information (Churchill et al., 2006).

**Limitations:** An indirect measurement; the free surface is inverted from velocity data, and the choice of inversion algorithm affects the result (Li et al., 2013).

**Measurement in breaking-wave conditions**

**Condition characteristics:** Under breaking-wave conditions the free surface is no longer a single-valued function and is accompanied by significant aeration, and the applicability of the various principles diverges.

**Restricted:** Acoustic probes have known deficiencies in the breaking zone, and capacitance probes require attention to measurement errors caused by water adhesion (ITTC 2024, 7.5-02-07-02.3).

**Measurement practice and criteria:** A single wave-probe record can be used to identify breaking waves (Liberzon et al., 2019); short-crested breaking waves have been studied in the laboratory (Ming et al., 2002).

**Applicability recommendations:** In extreme conditions where deck water depth or the shape of the local wave profile must be measured, capacitance or resistive probes have advantages (ITTC 2024, 7.5-02-07-02.3); optical stereo methods can capture breaking wave surfaces (Wang et al., 2025). Breaking significantly changes the wave spectrum, and this effect must be evaluated in the test design (ITTC 2024, 7.5-02-07-02.1).

Specifications and prices of specific models are given in 2.1.6.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Breaking conditions |
| --- | --- | --- | --- | --- |
| Resistive (conductive) | Applicable | Not evaluated | Not evaluated | Applicable |
| Capacitive | Applicable | Not evaluated | Not evaluated | Restricted |
| Ultrasonic (acoustic) | Applicable | Not evaluated | Not evaluated | Restricted |
| Pressure inversion | Applicable | Applicable | Applicable | Restricted |
| Optical (stereo photography / laser ranging) | Applicable | Applicable | Not evaluated | Applicable |
| Buoy motion integration | Not evaluated | Applicable | Applicable | Not evaluated |
| Radar / microwave | Not evaluated | Applicable | Not evaluated | Not evaluated |
| ADCP wave inversion | Not evaluated | Applicable | Applicable | Not evaluated |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** The choice of route for free-surface measurement depends on three conditions: whether the water surface can be touched, whether breaking waves must be measured, and whether long-term deployment is intended.

Contact methods (resistive and capacitive) give the free surface at the probe location with high accuracy and fast response, but require a support frame, and when measuring a free surface that moves with the model, the support frame disturbs the flow field; non-contact optical and radar methods do not intervene in the flow field, at the cost of being limited by water-surface conditions: optical methods require light-transmission and imaging conditions, and radar is affected by foam and droplets in the breaking zone. Under breaking-wave conditions, contact probes experience range saturation (resistive) or water adhesion (capacitive), while optical stereo reconstruction gives spatial information of a continuous wave surface and probe arrays provide spatial sampling at discrete measurement points.

Pressure sensors and motion buoys can both be used for long-term deployment. The former is affected by pressure attenuation and long-term drift; the latter's wave-following response depends on its design and also has response limitations in the low-frequency band. Although the buoy does not depend on an optical window, biofouling still changes its mass, drag, and sensor state.

#### 2.1.3 Implementation Considerations for the Three Scenarios

**Tank test:** The KHL main tank currently allows up to 25 wave probes to be used simultaneously (University of Strathclyde, n.d.). Separating incident and reflected waves does not require a fixed number of probes: writing the one-dimensional wave surface as the sum of a rightward-propagating component and a leftward-propagating component, two or more synchronously recorded wave probes at known spacing suffice to solve the two components frequency by frequency; three or more probes make the problem overdetermined and improve accuracy (Zelt & Skjelbreia, 1993). For arrays used in directional-spectrum estimation, the probe spacing should be about 1/10 to 1/2 of the dominant wavelength; spacing that is too large causes aliasing (insufficient spatial sampling, with high-wavenumber components aliased into low wavenumbers), and spacing that is too small makes the signal too weak relative to noise (ITTC 2017, 7.5-02-07-01.1, §4.3.1). The ITTC recommends choosing measurement locations where waves are fully developed and are not affected by reflection from the wavemaker, the tank walls, or the beach (the energy-dissipating slope at the end of the tank); when measuring a wave surface that moves with the model, non-contact probes are preferred, and this is particularly necessary at high speed (ITTC 2024, 7.5-02-07-02.1).

The ITTC notes that when many probes are used simultaneously or the support frame is bulky, the effect on the measurement result should be specifically evaluated by repeated tests with and without the probes (ITTC 2024, 7.5-02-07-02.1). There is a trade-off in the number of probes: too few probes make it difficult to obtain the true profile, while too many probes increase signal interference between probes, which is particularly significant for capacitance probes (ITTC 2024, 7.5-02-07-02.3).

A reflection coefficient below 5% in the frequency range of interest does not mean that reflection can be ignored. The ITTC notes that the capacity limitations of the wavemaker, the degradation of wave characteristics as they propagate through the facility, and reflection from the wave-absorbing devices all constitute uncertainty in the wave environment, and these uncertainties are difficult to estimate and are usually ignored (ITTC 2024, 7.5-02-07-02.1). Residual reflection under a passive wave absorber can still reach about 10% (Christensen et al., 2026). The estimation of directional parameters is sensitive to reflection: the two common definitions of the directional spectrum are based on the first-order and second-order circular moments (the first and second Fourier coefficients obtained by expanding the directional distribution as a Fourier series), and using both together aids judgement, with the first-order circular moment more easily affected by tank reflection (ITTC 2017, 7.5-02-07-01.1, §4.4.2). The low-frequency-component problem is particularly prominent: parasitic low-frequency waves appearing in a finite tank (unwanted long-period fluctuations excited by wave generation and reflection) lie in the same range as the horizontal natural periods of moored structures and affect the moored-structure response, and can be mitigated by superimposing a low-frequency compensation signal (anti-wave) on the wavemaker drive signal (Düz et al., 2022).

Methods for separating incident and reflected waves: Goda and Suzuki (1977) give a method for estimating incident and reflected waves for irregular-wave tests; Mansard and Funke (1980) use a least-squares method to separate incident and reflected spectra. A reflection-analysis method based on third-order theory can handle both amplitude nonlinearity and inter-wave dispersion (nonlinearity causes the phase velocity of each component wave to vary with wave amplitude, so the dispersion relation is modified relative to linear theory), and has been applied to measured wave surfaces in laboratory flumes (Christensen et al., 2026).

Multidirectional waves and shallow-water conditions bring two effects. Multidirectional waves make directional-spectrum measurement possible, and short-crested breaking waves have been studied in the laboratory (Ming et al., 2002). Shallow water depth enhances nonlinearity; the analysis of nonlinear wave motion in shallow water is given in Osborne (1994). Standard treatments of deep-water and shallow-water wave theory are given in Dean and Dalrymple (1991). The spatial uniformity of a multidirectional wave field is limited by the flap length of the wavemaker: each flap can generate waves only within a limited angular range, so the usable range of wave directions varies with spatial position, most notably in the outer region; reflection from the beach and the side walls is also a factor. In tests it is advisable to record the magnitude of these effects (for example the usable range of wave directions and the approximate size of the reflection coefficient) (ITTC 2017, 7.5-02-07-01.1, §4.5).

**Field sea trial:** Pressure sensors combined with linear wave theory or transfer-function inversion are a common long-term approach. Insufficient correction of pressure attenuation brings two types of error: using linear wave theory to process bottom pressure and flow-velocity data may underestimate wave height by about 20% under storm conditions, and current-induced Doppler effects can introduce biases of 2% to 10% (Moritz, 2002). Directional-wave measurement with pressure and flow-velocity sensors requires checking the coherence among the components (McKinney & Howell, 2002). The wave mode of an ADCP can invert the wave spectrum while measuring the current-velocity profile (Churchill et al., 2006); there are several directional-spectrum inversion algorithms based on instrument arrays, and comparative studies exist for ADCP wave-surface-elevation data (Li et al., 2013). ADCPs themselves now include wave and turbulence measurement functions, and their sound-speed calculation assumes salinity to be a preset constant, which should be confirmed before deployment to be consistent with the actual waters (Nortek, n.d.-a).

Buoys are suitable for statistical observations. Intercomparison trials show that the significant-wave-height differences between different buoys can be less than 7.5% (Brainard & Gardner, 1982), that the mooring system does not significantly affect the directional-spectrum measurement capability (Barstow et al., 1994), and that swell direction can be used for independent verification (Mettlach & Teng, 2006).

Extreme waves are by definition waves whose height exceeds twice the significant wave height (Dysthe et al., 2008). The directional spreading of the Spotter and the directional Waverider has been compared side by side (Ewans & Collins, 2026).

For a comparison of buoy and wave-probe measurements see Hu et al. (2021); for applications of pressure-type and cable-type wave-height monitoring see Kim et al. (2015).

**Long-term monitoring:** For long-term deployment, preference is given to principles with no moving parts, no optical windows, and low susceptibility to biofouling. The common approaches are pressure sensors and buoy motion integration. The long-term drift and calibration strategy of pressure sensors are given in 2.1.4. The applicability of distributed fibre-optic sensing for long-term deployment is given in Section 2.17.

#### 2.1.4 Calibration and Uncertainty

Wave probes are usually only statically calibrated, i.e. a known immersion depth is imposed in still water with a lifting platform and the output is recorded. Static calibration cannot determine the actual bandwidth (the frequency range over which the sensor responds faithfully). During static calibration there is no time-varying input, so it cannot be judged how quickly the sensor follows the wave-surface change. The ITTC recommends, where conditions allow, an end-to-end in-situ calibration of the full sensor system (calibrating the sensor, cable, amplifier, and acquisition chain together), in which case the individual Type B uncertainty components need not be identified one by one; a calibration sample size of not less than 7 is recommended, and the uncertainty of the curve fit can be expressed by the estimated standard error (ITTC 2024, 7.5-02-07-02.1). The quantisation uncertainty of analogue-to-digital conversion (the uncertainty introduced by discretising a continuous signal into finite levels) is taken as half the resolution; it is usually negligible for a 16-bit converter, but may be significant for high-accuracy measurements with a 12-bit converter (ITTC 2024, 7.5-02-07-02.1). For wave-theory background see Goda (2000) and Dean and Dalrymple (1991).

The calibration strategy for long-term monitoring is determined by the drift characteristics of pressure sensors: the drift is concentrated in the reference value, and the sensitivity scale usually does not change; even for better-quality low-pressure sensors, the annual drift can be of the order of millimetres, and requires periodic checking (IOC, 2006). Long-term pressurisation at constant pressure shows that the drift trend is significant early in pressurisation and then slows, and that the drift trends at atmospheric pressure and working pressure are similar, indicating that most of the drift can be handled by a zero-point correction (Kajikawa & Kobata, 2019, test pressure 100 MPa).

To assess the dynamic response, step or sinusoidal excitation is required (giving the sensor an instantaneous step input and frequency-by-frequency harmonic inputs respectively) to obtain the amplitude-frequency and phase-frequency characteristics. Before use, the phase consistency among the channels of a multi-probe array should be checked, because directional-spectrum estimation depends on the phase differences between probes; the upper bound of the phase error should be stated explicitly in the test report. The maximum entropy method can be used to estimate the directional spectrum from a wave-probe array (Nwogu, 1989); similar arrays have also been used to estimate statistics of steep waves (Scott, 2005). Capacitance-probe arrays can resolve the wave surface simultaneously in both time and space (Keller et al., 1979). Methods and experimental validation for estimating the directional spectrum from a wave-probe array have been reported (Tannuri et al., 2007). The true resolution of multimodal directional spectra is limited by the statistical error of the cross-spectral estimates, and the statistical error is determined by the record length, so testing with ideal cross-spectra alone is insufficient (ITTC 2017, 7.5-02-07-01.1, §4.4.3).

The uncertainty-analysis framework is given in ITTC Appendix A (ITTC 2024, 7.5-02-07-02.1). There are examples in which Type A and Type B components are evaluated item by item and the uncertainty propagated (definitions in "Terminology and Conventions") in wave-tank tests of a fixed oscillating-water-column device (Judge et al., 2021).

#### 2.1.5 Common Errors

- Using a single probe to represent the entire wave field.
- Treating the measurement result as the incident wave without separating the reflection (ITTC 2024, 7.5-02-07-02.1).
- Inconsistency between the frequency band of the calibration condition and that of the test condition.
- Ignoring the effect of probes on the model forces: the effect of multiple probes and a bulky support frame should be evaluated by repeated tests (ITTC 2024, 7.5-02-07-02.1).
- Estimating the relative positions of the probes in an array with a tape measure instead of performing an optical calibration.
- Still using linear theory to invert pressure data under breaking-wave conditions: linear wave theory may underestimate wave height by about 20% under storm conditions (Moritz, 2002).
- Continuing to use the original calibration coefficients without correcting for conductivity changes (Altmann, 1980).
- Parasitic waves appearing in the low-frequency band without being identified (Düz et al., 2022).
- Probe-signal saturation in extreme conditions without processing (ITTC 2024, 7.5-02-07-02.3).

#### 2.1.6 Models, Specifications, Prices, and Supply Channels

The table contains general-purpose industrial components as well as complete instruments and laboratory-grade products; the "product tier" column indicates the nature of each entry. Prices are listed prices on public pages; Amazon UK prices are in pounds sterling and include VAT, and Taobao prices are in renminbi. The date of checking channels and prices is 2026-09-30. The actual cost of field deployment comes mainly from installation, ongoing maintenance, and data analysis rather than from the instrument itself (IOC, 2006).

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Sensing element for pressure-type measurement (submersible level transmitter) | TL-136 | 12–32 VDC, 4–20 mA; 2 m range | Industrial component | £19.82 | Amazon UK 2026-09-30 | Unit price, UK-site price includes VAT |
| Sensing element for pressure-type measurement (submersible level transmitter) | Fafeicy level transmitter | 0–5 m, 4–20 mA, 304 stainless steel | Industrial component | £33.60 | Amazon UK 2026-09-30 | — |
| Sensing element for pressure-type measurement (submersible level transmitter) | Industrial pressure transmitter | 0–10 bar | Industrial component | £391.00 | Amazon UK 2026-09-30 | — |
| Ultrasonic (ultrasonic water-level gauge) | Fafeicy ultrasonic water-level sensor | 0–8 m; blind zone 0–20 cm; ±2 mm; display resolution 1 mm; 4–20 mA; ABS, IP65 | Industrial component | £32.98 | Amazon UK 2026-09-30 (price); product page 2026-10-20 (specifications) | — |
| Ultrasonic (ultrasonic water-level gauge) | Fabater ultrasonic level sensor | 4–20 mA output | Industrial component | £114.64 | Amazon UK 2026-09-30 | — |
| Ultrasonic (ultrasonic water-level gauge) | Ultrasonic water-level sensor (wireless ranging type) | 0–25 m, 4–20 mA | Industrial component | £116.25 | Amazon UK 2026-09-30 | Another seller lists the same model at £149.85 |
| Capacitive | XKC-Y25 | NPN output, 5–12 V | Component | £11.37 | Amazon UK 2026-09-30 | Non-contact switch, not continuous measurement; only as a price reference for the component, not representative of a continuous wave-measuring instrument |
| Wave probe | High-precision intelligent digital wave probe / wave-height gauge / wave-height sensor | Direct connection to host computer | Laboratory grade | ¥3800 | Taobao 2026-09-30 | Seller in Chengdu, Sichuan |
| Wave probe | Digital wave-height gauge, wave probe, for wave generation tanks and laboratory tanks | For wave-generation and laboratory tanks | Laboratory grade | ¥150 | Taobao 2026-09-30 | Seller in Chengdu, Sichuan |
| Wave probe | Intelligent digital wave probe, wave-height sensor | RS485 networking | Industrial component | ¥185 | Taobao 2026-09-30 | — |
| Wave buoy | Kekan drifting wave buoy | Measures wave parameters such as directional spectrum and spectral peak | Laboratory grade | ¥999 | Taobao 2026-09-30 | — |
| Wave buoy | Buoy-type water-quality monitoring device, wave sensor | Solar powered, wireless communication, GPS positioning | Complete system | ¥60000 | Taobao 2026-09-30 | — |
| Stereo vision (camera part) | Dual-lens synchronised stereo USB camera | 1.3 MP, 960P | Component | £78.05 | Amazon UK 2026-09-30 | USB camera module; the synchronised-trigger industrial cameras required for free-surface reconstruction have no published price and require quotation. Analysis software licences are quoted separately |
| Stereo vision (camera part) | Svpro dual-lens USB camera module | 1080P, 60 fps, UVC | Component | £96.99 | Amazon UK 2026-09-30 | As above |

The "product tier" column describes the nature of the entries, and prices at different tiers cannot be compared directly. When browsing Taobao on your own, very-low-price entries are often lead-in or accessory prices and do not represent complete-instrument prices.

Sensor suppliers: Nortek, RBR, Datawell, Sofar Ocean, Sea-Bird Scientific, Keller, LaVision, Dantec Dynamics.
Facilities and support: HR Wallingford, Edinburgh Designs (wave-generation equipment and physical-model services, not sensor suppliers). Websites are given in Appendix C.

### 2.2 Forces and Moments

#### 2.2.1 Measurement Target and Criteria

The direct objects of measurement are the forces and moments acting on the model, classified by the number of components into single-component, three-component, and six-component. Common applications include ship resistance and thrust, mooring and anchor-chain tension, wave- and current-induced forces on floating bodies and risers, slamming loads, and forces on the power take-off of marine energy devices (the component that converts device motion into usable power). For the theoretical background of wave and current loads see Faltinsen (1990).

The differences in force and moment measurement lie mainly in the temporal characteristics of the loads and in the coordinate conventions (ITTC 2024, 7.5-02-07-02.1, §4.1).

The first difference is the temporal characteristic: whether what is measured is a static mean, a slowly varying low-frequency component, or a transient peak containing impacts. These three types place completely different requirements on bandwidth, filtering, and calibration. The second is the coordinate system: the output of a six-component force balance must be related to the model coordinate system and the wave propagation direction in a clear and reproducible way, and the correspondence between the balance axes and the model longitudinal, transverse, and vertical axes, together with the position of the reference point, must be recorded in the test records. When a segmented model measures the total load, the mass, centre of gravity, and inertia of each segment must be known and recorded, and the wave-induced load should preferably be separated from the total load; the vertical bending moment (the vertical bending moment of the hull girder along the ship length) must be given for both extremes of hogging (the middle of the ship arching upward, deck in tension) and sagging (the middle of the ship sagging downward, deck in compression), because the two correspond to different structural loading states (ITTC 2024, 7.5-02-07-02.1, §2.6).

The moments in a model six-component load are related to the reference point, and a consistent reference point must be used when comparing results. There are three common approaches to moment measurement: measuring torque on the rotating shaft directly; obtaining the three moment components by decoupling from a six-component balance; and converting from several single-component force-measuring elements at known lever arms. Shaft torque usually refers to torque transmitted about a specified axis, while a pure couple is independent of the reference point.

The first is direct measurement of shaft torque, for example power take-off torque, propeller torque, and drive-shaft torque, whose axis, measurement cross-section, and positive direction together define the measurement result. The measurement principle of rotating-shaft torque is given in Section 2.9.

The second is component decoupling. A six-component balance gives three force components and three moment components simultaneously from a single measurement element, with the moments obtained by decoupling from the strain distribution inside the measurement element. This is the main implementation of "moment" measurement and is widely used in hydrodynamic model tests.

The third is indirect derivation. Several single-component force-measuring elements are combined at known lever arms to convert to moments. Pitching and rolling moments (the turning moments about the transverse and longitudinal axes respectively) are often obtained this way, for example by placing one force-measuring element at each of two points at the front and rear of the model and converting the pitching moment from the distance.

Six-component balances and moments converted from lever arms use an explicit reference point; shaft torque uses an explicit axis, measurement cross-section, and positive direction. These conventions give different results a common basis for comparison.

#### 2.2.2 Comparison of Principle Routes

The seven measurement principles covered in this section are shown in the table below. The torque and rotational speed corresponding to row 7 are given in Section 2.9.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Strain-gauge force element | Contact | Strain of the elastic element | Force converted through the calibration relationship of the strain-bridge output |
| 2. Piezoelectric | Contact | Charge produced by the piezoelectric crystal | Dynamic force converted through charge or voltage sensitivity |
| 3. Six-component force balance | Contact | Strains of multiple elastic elements | Force and moment decoupled through a multi-channel calibration matrix |
| 4. Load shackle | Contact | Strain of the shackle body | Shackle strain converted to tension through a calibration relationship |
| 5. Hydraulic and pneumatic force measurement | Contact | Hydraulic or pneumatic pressure | Force converted from pressure |
| 6. Paired force-element combination | Contact | Forces at two locations | Moment converted through lever arm |
| 7. Strain-gauge torque sensor | Contact | Torsional strain of the rotating member | Shaft torque converted through the torsional-strain calibration relationship |

**1. Strain-gauge force element**

**Working principle:** The elastic element deforms under load, and strain gauges bonded to it form a bridge circuit whose output voltage is proportional to the strain (Interface, 2024), so within the calibration range the force and the output are approximately linear.

**Typical magnitudes and limitations:** The specific values of range, nonlinearity, hysteresis (the difference between the loading and unloading curves), and non-repeatability (the difference between the results of repeated loadings) must be checked model by model against the manufacturer's data sheet; general industrial components and laboratory-grade elements are not on the same tier for these quantities (representative models and prices in 2.2.6).

**Advantages:** Can measure static and low-frequency components; mature technology; fatigue-grade products can reach a fatigue life of 100 million fully reversed cycles (load alternating at equal amplitude in the positive and negative directions) (Interface, 2024).

**Limitations:** Requires external power and signal conditioning (the strain-bridge output is at the millivolt level and must undergo stable bridge excitation, amplification, and filtering before entering the acquisition system), and most data chains require an external amplifier (Interface, 2024); temperature changes shift the entire output curve and change the output slope (Interface, 2024); range and resolution require a trade-off: the larger the selected range, the smaller the output for the same load and the lower the resolution (see 2.2.3).

**2. Piezoelectric**

**Working principle:** A piezoelectric crystal produces charge when loaded, the charge being proportional to the applied force, with near-zero displacement under load (PCB Piezotronics, n.d.-a). The charge-output type converts to voltage through an external charge amplifier; the IEPE/ICP type has built-in conditioning and outputs a low-impedance voltage signal with constant-current excitation (PCB Piezotronics, n.d.-d).

**Typical magnitudes and limitations:** The discharge and coupling time constants of the sensor and conditioning chain limit the low-frequency response, and the signal under a sustained load decays gradually (PCB Piezotronics, n.d.-a).

**Advantages:** High stiffness and high resonant frequency, suitable for impact and transient loads.

**Limitations:** Cannot hold the output of a constant static load; the usable duration of quasi-static measurement is limited by the discharge time constant (the time required for the signal to decay to about 37%). The charge-output type requires a charge amplifier and low-noise cable; the IEPE/ICP type requires the corresponding constant-current excitation (PCB Piezotronics, n.d.-a, n.d.-d).

**3. Six-component force balance**

**Working principle:** The six-component balance measures all force and moment components simultaneously on three orthogonal axes (Kistler, n.d.); the measurement element may use multiple strain bridges or piezoelectric elements, and each component is separated from the outputs through the decoupling matrix obtained from calibration (the calibration matrix that converts each channel output to the component loads) (see 2.2.4).

**Typical magnitudes and limitations:** Crosstalk (the output appearing on the channels of other components when one component is loaded) varies with the model and the calibration method; manufacturer specifications give it as a percentage of full-scale output, with typical values of ±2% to ±4% (FSO, full-scale output) (Kistler, n.d.). When a segmented model measures the total longitudinal load, the natural frequency of the system should be measured and recorded in the test records (ITTC 2024, 7.5-02-07-02.1, §2.6).

**Advantages:** Obtains all load components in one measurement, reducing the number of installations and sources of installation error.

**Limitations:** Complex calibration and decoupling, with crosstalk handled through the calibration matrix (ITTC 2024, 7.5-02-07-02.6, §2.5); high cost (see 2.2.6); underwater use requires sealing.

**4. Load shackle**

**Working principle:** Strain gauges are bonded to the shackle body, and the tension is obtained from the body strain under loading (same principle as Principle 1 of 2.2.2).

**Typical magnitudes and limitations:** Taking the Straightpoint Loadshackle as an example, the standard series has rated capacities from 3.25 to 400 t, extendable on request to 3000 t; the data sheet claims an accuracy of ±1% of full scale, with resolution from 0.005 to 0.5 t depending on the range (Straightpoint, n.d.).

**Advantages:** Can directly replace an existing shackle, easy to install (Straightpoint, n.d.).

**Limitations:** Accuracy is given as a fraction of full scale, so the relative error of small loads far from full scale increases; mainly used for on-site tension measurement in lifting and mooring, not suitable for tank model tests requiring high-accuracy small-load measurement; relatively bulky; does not measure moment.

**5. Hydraulic and pneumatic force measurement**

**Working principle:** A hydraulic or pneumatic cylinder carries the load, and the force is converted from the pressure in the cylinder.

**Typical magnitudes and limitations:** The range is determined by the bore diameter and rated pressure, and the specific range varies with the model.

**Advantages:** Simple structure, strong overload capability.

**Limitations:** Lower stiffness and poorer dynamic response.

**6. Paired force-element combination**

**Working principle:** One force-measuring element is placed at each of two measurement points at a known distance, and the moment is converted from the two forces and the lever arm.

**Typical magnitudes and limitations:** The range depends on the force-measuring elements used; the relative error of the lever-arm measurement is reflected proportionally in the moment measurement result (see 2.2.3).

**Advantages:** Realised with existing sensors, flexible arrangement.

**Limitations:** Requires a known lever arm; the flexibility of the support frame changes the load distribution and the force-transmission path, and this effect is superimposed on the measured force.

**7. Strain-gauge torque sensor**

**Working principle:** The torque about a specified axis is obtained from the torsional strain of the rotating member; details in Principle 1 of 2.9.2.

**Typical magnitudes and limitations:** Sensor selection, installation, and calibration are given in Section 2.9.

**Advantages:** Suitable for shaft-torque measurement of rotating members.

**Limitations:** Requires shaft alignment and is relatively bulky. Details in Section 2.9.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Impact conditions |
| --- | --- | --- | --- | --- |
| 1. Strain-gauge force element | Applicable | Applicable | Restricted | Not evaluated |
| 2. Piezoelectric | Not evaluated | Not evaluated | Not applicable | Applicable |
| 3. Six-component force balance | Applicable | Not evaluated | Not evaluated | Applicable |
| 4. Load shackle | Not evaluated | Applicable | Not evaluated | Not evaluated |
| 5. Hydraulic and pneumatic force measurement | Not evaluated | Not evaluated | Not evaluated | Restricted |
| 6. Paired force-element combination | Applicable | Not evaluated | Not evaluated | Not evaluated |
| 7. Strain-gauge torque sensor | Not evaluated | Not evaluated | Not evaluated | Not evaluated |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the first criterion of 2.2.1 (static mean, low-frequency component, or transient peak), combined with the range, the number of components, and the calibration workload (the number of loading points and calibration directions), the choice among the principles is as follows.

Strain-gauge types (including six-component balances and load shackles) can measure static and low-frequency components, while piezoelectric types can measure only dynamic components; a six-component balance is used when forces in three directions and moments in three directions must be obtained simultaneously, and a load shackle is used when only single-direction tension is measured and the accuracy requirement is not high (see Principle 4 of 2.2.2). In terms of range, the larger the selected range of a strain-gauge type, the smaller the output and the lower the resolution for the same load (see Principle 1 of 2.2.2); hydraulic and pneumatic types have a simple structure and relatively strong overload capability, but stiffness and dynamic response are affected by the cylinder body and piping. The calibration workload forms another dividing line: a six-component balance requires establishing a decoupling matrix, and the workload is related to the number of channels and loading points; single-component strain-gauge elements can be calibrated with dead weights, and dynamic applications also involve frequency-response checking (using known weights to establish the relationship between force and output).

#### 2.2.3 Implementation Considerations for the Three Scenarios

**Tank test:** When selecting a model, determine the range from the total load under the most unfavourable condition: the sum of the dead load (static components such as model self-weight, preload, and mean resistance) and the peak live load (dynamic components such as waves and impacts); the practice commonly used by manufacturers is to scale up the dead load by condition and add them together — a factor of 1.5 for static conditions and 2 for impact conditions (Transcell, 2026), and another common practice is 20% to 50% above the highest expected load (Group Four Transducers, n.d.). At the same time check the safe overload rating, a common level being 150% of the rated range; an excessively large range sacrifices resolution, and the trade-off can be referred to uncertainty-evaluation examples of ship-model resistance tests (Steen et al., 2015).

Installation: in mooring tests each mooring line is individually connected in series with one force-measuring element, positioned as close as possible to the fairlead (where the line leaves the hull or model), to reduce the effect of line elasticity on the measurement; for the modelling fidelity and fatigue response of mooring lines see Hall et al. (2013) and Sedghi and Kimiaei (2018).

The effect of a parallel device or a bulky support frame on the measured load should be specifically evaluated by repeated tests with and without the device (ITTC 2024, 7.5-02-07-02.1, §2.7.1).

Installation stiffness is part of the measurement chain: after the segmented model and balance are installed, the natural frequency of the system should be measured and recorded in the test records; if these frequencies fall within the frequency range of interest, what is measured will be the resonance of the support frame rather than the model load (ITTC 2024, 7.5-02-07-02.1, §2.6).

Fixture misalignment carries the error directly into the measurement result: when the loading direction does not coincide with the sensor principal axis, the load is decomposed into a component along the principal axis and a lateral component; a deviation of a few degrees is enough to produce a lateral component of several percent, which forms an additional moment at the measurement point (Interface, 2024).

For the total longitudinal response it is necessary to distinguish the low-frequency total longitudinal response from the high-frequency whipping response (the transient elastic vibration of the hull girder after impact): the two are usually separated in the time domain by digital filtering, and can also be recorded separately with different filter settings when designing the acquisition scheme (ITTC 2024, 7.5-02-07-02.6, §2.11).

In arrangement, moment measurement differs from force measurement in two respects. First, the reference point must be recorded together with the coordinate system in the test records, and the position of the reference point should be stated in the dataset description. Second, the lever arm in a paired force-element scheme is a direct source of error: the relative error of the lever-arm measurement is reflected proportionally in the moment measurement result, and support-frame deformation may also change the effective lever arm.

Cable routing needs to be separated from the carriage power lines to reduce interference from the power circuit on the signal circuit. Placing the amplifier close to the sensor improves the signal-to-noise ratio (the ratio of signal power to noise power), but the humid environment at the tank side requires a correspondingly higher protection rating.

**Field sea trial:** Load shackles are convenient for replacing existing hardware and are suitable for mooring and lifting tension monitoring. In the field, slow-drift components (low-frequency drift motions with periods much longer than the waves) coexist with wave-frequency components: the sampling rate is constrained by the fastest load variation of interest, while the record length is constrained by the slow-drift period; the low-frequency cutoff of the measurement chain and processing such as detrending and high-pass filtering affect the retention of slow-drift components. Fatigue damage accumulates by cycle count and amplitude, and truncation or loss of records leads to underestimation of cycle counts and accumulated damage (Sedghi & Kimiaei, 2018).

**Long-term monitoring:** Long-term monitoring should select fatigue-grade force-measuring elements, whose fatigue life is given for fully reversed cycles, for example 100 million cycles (Interface, 2024); the long-term cycle-life specification of ordinary precision grades is usually not given in manufacturer specifications and should not be used in the same way. Temperature compensation is indispensable in long-term deployment: temperature affects both the zero point and the output (Interface, 2024); the seasonal variation of seawater temperature will, through zero-point and sensitivity drift, produce an apparent load (a false load that is not a real applied force) of the same order as the measured load.

#### 2.2.4 Calibration and Uncertainty

Dead-weight calibration is the basic approach: known weights are applied step by step to the sensor, the output at each step is recorded, and the relationship between force and output is obtained. It gives a static calibration and does not involve the dynamic response. Common manufacturer indicator definitions include the static error band, nonlinearity, hysteresis, non-repeatability, and parasitic-load sensitivity (Interface, 2024). The manufacturer's routine at the factory is: first load to the rated range three times to remove the loading history (preconditioning), i.e. to remove the loading history of the previous loading and the first-loading effect so that the output is stable and reproducible; then record the output at several loading points — the typical practice is five loading points within the range (for example 0/25/50/75/100% of rating), loading upward step by step, then unload from one of the points (usually 40%–50% of full scale) once to obtain a return reading; hysteresis is the difference between the loading and unloading curves, and its value varies with the load point, with the manufacturer usually giving the value at 40% to 50% of full scale (Interface, 2024). Shunt calibration (an electrical check that simulates strain by connecting a standard resistor in parallel with one arm of the bridge) can quickly check the bridge gain on site, but it verifies only the electrical chain: even if the load sensors have been individually calibrated, the overall loading of the segment should still be verified in situ with independently applied forces and couples (two equal, opposite, non-collinear forces) (ITTC 2024, 7.5-02-07-02.6, §2.5).

The calibration of the moment components must be carried out at known lever arms, and the loading points should cover the positions used in practice.

A six-component balance requires calibration of the decoupling matrix, i.e. applying loads in multiple directions and eccentric positions to establish the mapping between the outputs and the components; the calibration matrix (the matrix that converts each channel output to each load component, with diagonal terms being the sensitivities of the components and off-diagonal terms the crosstalk) must include the crosstalk components (ITTC 2024, 7.5-02-07-02.6, §2.5). For the calibration uncertainty and nonlinearity effects of multi-component balances see Reis et al. (2003) and Steinle (2000). Eccentric loading produces moments, and if the loading points of the calibration condition differ from those of the usage condition, the error is reflected directly in the measurement result.

The uncertainty analysis is carried out according to the Guide to the Expression of Uncertainty in Measurement (GUM) (Joint Committee for Guides in Metrology JCGM, 2008; see also ITTC 2024, 7.5-02-07-02.6, §3.1). Parameters that should be recorded together with the dataset include: the natural frequency and damping characteristics of the elastic model, the sampling rate and filter frequency, the sensor calibration and accuracy, and the stiffness distribution and neutral-axis height of the elastic model (ITTC 2024, 7.5-02-07-02.6, §3.1). For data processing: the sampling rate, the filter type and cutoff frequency, and whether peaks have been reconstructed should be stated (ITTC 2024, 7.5-02-07-02.6, §2.11).

#### 2.2.5 Common Errors

- Using static-calibration results to process dynamic measurements: even if the load sensors have been individually calibrated, the overall loading of the segment should be verified in situ with independently applied forces and couples (ITTC 2024, 7.5-02-07-02.6, §2.5).
- The flexibility of the mounting frame cannot be ignored: the natural frequencies of the segmented model and the balance must avoid the wave-frequency band, and must be measured and recorded in the test records (ITTC 2024, 7.5-02-07-02.1, §2.6).
- Peak clipping caused by insufficient sampling rate.
- Applying low-pass filtering to remove noise without evaluating its effect on peaks: the low-frequency total longitudinal response and the high-frequency whipping response should be separated in the time domain and evaluated separately (ITTC 2024, 7.5-02-07-02.6, §2.11).
- The alignment between the six-component balance coordinate system and the model coordinate system is not recorded.
- The position of the force-measuring element in the mooring-force measurement is inconsistent with the evaluation point in the numerical model.

#### 2.2.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of the sensors and accessories required by the principles in 2.2.2, with a query date of 2026-10-05, all sourced from Amazon UK product pages, with prices in pounds sterling including VAT.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Strain-gauge force element | S-Type Load Cell 10KG | Industrial weighing and tension/compression module | Industrial component | £22.99 | Amazon UK 2026-10-05 | Unit price |
| Strain-gauge force element | Portable S-type 50/100/300/2000 kg | S-type tension/compression | Industrial component | £32.05 | Amazon UK 2026-10-05 | — |
| Strain-gauge force element | Accuracy Beam 50 kg to 10 t | Compression, tension, and shear | Industrial component | £128.99 | Amazon UK 2026-10-05 | Highest range in this table |
| Six-component force balance | Six-dimensional Force Sensor FC6D45 | Six components of force and moment | Industrial component | £355.59 | Amazon UK 2026-10-05 | Same page also has FC-6DT27 at £401.92 |
| Six-component force balance | 6-Axis Force Torque Sensor (0–20 kg) | Six-axis force and moment | Industrial component | £562.99 | Amazon UK 2026-10-05 | Up to £619.29 on the same page |
| Load shackle | 3T/5T/10T Bluetooth Dynamometer | Bluetooth output, lifting weighing | Industrial component | £440.00 | Amazon UK 2026-10-05 | Complete instrument |
| Load shackle | 10T/30T/50T wireless digital dynamometer | RS232 remote control | Industrial component | £864.88 | Amazon UK 2026-10-05 | — |
| Load shackle | Flate Ring Tension Load Cell with Shackle | Tension element with shackle | Industrial component | £656.68 | Amazon UK 2026-10-05 | The only element type explicitly including a shackle |
| Signal conditioning and transmission | 0–10 V Load Cell Amplifier Transmitter | Bridge transmission | Component | £12.31 | Amazon UK 2026-10-05 | Same type also at £12.52, £13.44, £15.82 |
| Signal conditioning and transmission | 4–20 mA Load Cell Transmitter | 15–30 VDC supply | Component | £31.11 | Amazon UK 2026-10-05 | — |
| Signal conditioning and transmission | GT01A (RW-GT01A) | DIN rail, 0–5/10 V and 4–20 mA | Industrial component | £63.36 | Amazon UK 2026-10-05 | Four-channel version also at £51.89 |
| Strain gauge | BF350-3AA | 350 Ω, pack of 10 | Component | £8.39 | Amazon UK 2026-10-05 | About £0.84 each |
| Strain gauge | BF350-3EB full-bridge strain gauge | 350 Ω, pack of 2 | Component | £7.89 | Amazon UK 2026-10-05 | — |
| Strain gauge | BF120-3AA strain gauge | 120 Ω, pack of 10 | Component | £9.99 | Amazon UK 2026-10-05 | — |

The six-component balances and lifting dynamometers in the table are general-purpose components for industrial-robot and lifting applications, and are not on the same tier as laboratory-grade balances and type-approved shackles; laboratory-grade products (ATI, Kistler, JR3, Straightpoint, etc.) have no published price and require quotation. Low-price entries are often lead-in or accessory prices and do not represent complete-instrument prices. For the hydraulic/pneumatic force measurement and paired force-element combination categories, no corresponding finished products with published prices were found, and quotations are obtained on request.

Main supply channels: HBK, Interface, Futek, Novatech, Tedea, LCM Systems (single-component and special-purpose force measurement); ATI Industrial Automation, Kistler, Bertec, JR3 (multi-component balances); Straightpoint (load shackles). Channel websites are given in Appendix C.

### 2.3 Pressure

#### 2.3.1 Measurement Target and Criteria

Pressure measurement is divided into three categories: static pressure and low-frequency dynamic pressure, high-frequency dynamic pressure, and multi-point pressure-field distribution. Applications include model surface-pressure distribution, slamming and green-water loads, cavitation and bubble pulsation, boundary-layer pressure fluctuation, and depth and tide level.

Quantities derived from the pressure time history include: static pressure and water depth, the amplitude and phase of low-frequency dynamic pressure, the impact-pressure peak and rise time, the pressure spectral density, and the spatial distribution of a multi-point pressure field.

These methods differ mainly in the following respects. First, frequency band: static pressure and low-frequency dynamic pressure require the absolute quantity (the complete pressure value including the constant static pressure); high-frequency dynamic pressure usually cares only about the fluctuating quantity (the fluctuation relative to a reference), and most high-frequency sensors cannot retain the DC component (the component that does not vary with time). This difference determines the choice of principle and the signal-conditioning approach. Second, range: the range must cover the sum of the static and dynamic components, and in deep-water tests the static pressure is often the dominant term. Third, spatial coverage: the choice of sensor differs between point measurement and multi-point fields; multi-point scanning sacrifices simultaneity among the channels (each measurement point is sampled in turn according to the scanning cadence, not at the same instant), which directly affects the conclusions for impact-type phenomena. Fourth, installation conditions: whether flush mounting is possible (with the sensing face flush with the structure surface); when flush mounting is not possible, a pressure tap and tubing (leading the pressure from the measurement point to the sensor) is required, and its dynamic characteristics must be calibrated separately.

Impact pressures (the impact pressures on the hull and deck) are among the parameters that the ITTC lists as to be measured in tests; capturing slamming-load peaks requires sampling rates of the order of kHz (ITTC 2024, 7.5-02-07-02.1, §2.8).

#### 2.3.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Piezoresistive | Contact | Resistance change of the piezoresistive element | Pressure converted through the calibration relationship of the piezoresistive output |
| 2. Piezoelectric | Contact | Charge produced by the piezoelectric crystal | Dynamic pressure converted through charge or voltage sensitivity |
| 3. Quartz resonant | Contact | Resonant frequency of the quartz crystal | Pressure converted from frequency |
| 4. Differential | Contact (requires a reference pressure) | Difference between the two-side pressures | Differential pressure obtained from the calibrated output of the differential element on the two sides |
| 5. Pressure scanner / electronic pressure scanner | Contact (multi-point) | Pressure of each channel | Each channel converted through a calibration relationship; channel timing varies with the device |

**1. Piezoresistive**

**Working principle:** The resistance of silicon piezoresistors changes under pressure; connecting them as a bridge with constant excitation, the bridge output is proportional to the resistance change, so the output voltage follows the pressure directly — including a constant, unchanging static pressure. This is why the piezoresistive type can retain the DC component.

**Typical magnitudes and limitations:** In model-scale breaking-wave measurement, a piezoresistive (silicon) sensor on a 1:22 scale model can have a range of about 1 bar, and the typical resonant frequency of such transducers (devices that convert the measured quantity into an electrical signal) is about 130 kHz; the resonant frequency determines the highest usable response frequency, and the working band must be well below it, otherwise amplitude and phase are distorted (ITTC 2024, 7.5-02-07-02.3, §2.4).

**Advantages:** Can measure static and low-frequency dynamic pressure; can have built-in amplification (outputs a standard signal, no separate amplifier needed); good interface compatibility.

**Limitations:** Significant temperature drift and weak overload capability.

**2. Piezoelectric**

**Working principle:** The piezoelectric crystal produces charge under pressure. The charge-output type converts to voltage through an external charge amplifier; the IEPE/ICP type completes conditioning inside the sensor and is powered by a constant-current source (PCB Piezotronics, n.d.-d).

**Typical magnitudes and limitations:** Taking the PCB 113B26 (ICP type) as an example: range 500 psi, sensitivity 10 mV/psi, resonant frequency not less than 500 kHz, rise time not more than 1 µs, nonlinearity not more than 1% FS (full scale) (PCB Piezotronics, 2026).

**Advantages:** High bandwidth, small size, high stiffness.

**Limitations:** Cannot retain the DC component. The charge-output type is sensitive to insulation and cable noise and requires an external charge amplifier; the IEPE/ICP type requires constant-current excitation, and its low-frequency and high-frequency responses are jointly limited by the sensor and the conditioning chain (PCB Piezotronics, n.d.-d).

**3. Quartz resonant**

**Working principle:** The resonant frequency of the quartz crystal varies with the applied pressure, and the pressure is converted from the frequency.

**Typical magnitudes and limitations:** The range covers from shallow-water pressure to high-pressure applications, with the specific range depending on the model; the resolution varies with the range; long-term stability is its core advantage, while the dynamic response is poor.

**Advantages:** Extremely low long-term drift, suitable for absolute-pressure and depth measurement.

**Limitations:** High cost and poor dynamic response.

**4. Differential**

**Working principle:** The difference between the pressures at two taps is measured, requiring one stable reference pressure.

**Typical magnitudes and limitations:** Suitable for low ranges and small differential pressures, with ranges from tens of pascals to thousands of pascals; the connecting tubing significantly changes the dynamic response.

**Advantages:** Higher resolution can be obtained at low ranges.

**Limitations:** Requires a reference pressure; the connecting tubing significantly affects the dynamic response.

**5. Pressure scanner**

**Working principle:** A mechanical scanning valve connects several measurement points to the same pressure sensor in turn, so the points are scanned; an electronic pressure scanner can provide an independent sensing element for each channel, with sampling by electronic polling or synchronously. The valve body can also handle calibration, purging, and isolation switching, and the channel timing depends on the device construction (Scanivalve, 2026a).

**Typical magnitudes and limitations:** The number of channels can reach tens to hundreds; the equivalent sampling rate of mechanical scanning is limited by the switching speed, while the sampling rate and simultaneity of an electronic scanner vary with the model (Scanivalve, 2026a). For the arrangement and calibration of multi-point impact pressure measurement in liquid-tank sloshing see the corresponding test procedure (ITTC 2024, 7.5-02-07-02.7, §2.5).

**Advantages:** High channel density, suitable for model surface-pressure-field measurement.

**Limitations:** Mechanical scanning and electronic polling have inter-channel time differences, and the pressure tubing also introduces delay, attenuation, and resonance; suitability for fast transients depends on the channel sampling mode, bandwidth, and tubing dynamic characteristics.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Impact conditions |
| --- | --- | --- | --- | --- |
| 1. Piezoresistive | Applicable | Not evaluated | Not evaluated | Applicable |
| 2. Piezoelectric | Applicable | Not evaluated | Not evaluated | Applicable |
| 3. Quartz resonant | Not evaluated | Applicable | Applicable | Restricted |
| 4. Differential | Not evaluated | Not evaluated | Not evaluated | Not evaluated |
| 5. Pressure scanner | Applicable | Not evaluated | Not evaluated | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the four criteria of 2.3.1 (frequency band and DC component, range, spatial coverage and simultaneity, installation conditions), the choice among the principles is as follows.

Piezoresistive and quartz resonant types can retain the DC component and are suitable for static pressure and low-frequency dynamic pressure; the low-frequency response of the piezoelectric measurement chain is limited by the discharge and coupling time constants and is suitable for dynamic pressure. The specific frequency response varies with the model and installation: for example, the aforementioned PCB 113B26 has a resonant frequency not less than 500 kHz and a rise time not more than 1 µs, and the piezoresistive example has a resonant frequency of about 130 kHz; these are model-specific indicators, not uniform properties of the whole class of principle. The quartz resonant type covers shallow-water to high-pressure applications; at model scale, the piezoresistive type can reach a range of about 1 bar (ITTC 2024, 7.5-02-07-02.3, §2.4); the differential type is suitable for low ranges and small differential pressures.

The number of measurement points forms another difference: a multi-channel pressure-scanning system can concentrate the connection of several measurement points; mechanical scanning trades a reduced number of sensors for channel-switching time, while an electronic scanner can use several independent sensing elements. Single-point sensor schemes facilitate flush mounting and independent sampling at critical locations.

#### 2.3.3 Implementation Considerations for the Three Scenarios

**Tank test:** The key to model surface-pressure measurement is installation. There are two ways of installing a pressure sensor: **flush mounting** means that the sensing face is flush with the structure surface and the pressure acts directly on the sensing face; **tube connection** means using a length of pressure tubing to lead the pressure from the measurement point to the sensor. Flush mounting is preferable to tube connection, because the pressure tubing constitutes a low-pass filter, and the tube length, tube diameter, and bubbles in the tube all distort the signal; for the spatial and frequency filtering characteristics of flush mounting and tubing systems see Maidanik (1967). When the structure does not allow flush mounting, the tubing must be dynamically calibrated, and the phase and amplitude errors thus introduced must be recorded in the test records. The pressure tap gives the average pressure over the orifice area, which is not equivalent to a point value; flush mounting still changes the local flow because of the opening; when tubing is used, the frequency-dependent time lag should be compensated in data processing.

Multi-point pressure on the model surface often uses a pressure scanner or an electronic pressure scanner. The inter-channel time differences of mechanical scanning and electronic polling affect the phase comparison of rapidly varying phenomena; a synchronous sampling configuration can reduce this effect, but the dynamic characteristics of the pressure tubing still limit the bandwidth. Independently flush-mounted sensors can also be used at critical points (Scanivalve, 2026a; ITTC 2024, 7.5-02-07-02.7, §2.5).

In tanks with greater water depth, the static pressure varies with depth, and the range of a dynamic pressure sensor must cover the sum of the static and dynamic components. If the sensor range is selected only for the dynamic component, it will be driven directly to saturation by the static pressure.

The most common construction for breaking-wave and slamming pressure is a diaphragm (a thin sensing element that deflects under pressure) with strain gauges (a strain-type pressure element, of the same origin as the strain-gauge type of Principle 1 in 2.2.2); at model scale, a sampling rate of 10 to 20 kHz is sufficient for most measurements, and high-speed photography can be used to relate peak pressure to relative motion (ITTC 2024, 7.5-02-07-02.3, §2.4).

**Field sea trial:** Absolute-pressure measurement is used for depth, tide level, and long-period waves. The long-term stability of quartz resonant sensors is a significant advantage in deployments of several months to years, and matters more than short-term accuracy when calibration opportunities are limited. When inverting the free surface from pressure, attenuation correction is required, together with synchronised water-depth and flow-velocity information.

**Long-term monitoring:** In long-term deployment, pressure-sensor drift and biofouling are the main threats. Fouling of the sensor/seawater contact surface causes zero-point offset, which usually needs to be mitigated through tap design or periodic maintenance.

#### 2.3.4 Calibration and Uncertainty

Static-pressure calibration uses a standard pressure source, and dynamic calibration uses a sinusoidal pressure generator or a step pressure source with a known rise time; for the implementation of dynamic pressure calibration sources see Vezzetti (1976). The system sensitivity of the charge-output type can be combined from the sensor charge sensitivity and the amplifier gain in their respective units; the gain, polarity, time constant, and cable arrangement of the actual conditioner jointly affect the whole-chain response. The IEPE/ICP type is checked according to its voltage sensitivity and the corresponding conditioning settings (PCB Piezotronics, n.d.-c, n.d.-d).

Uncertainty components specific to pressure measurement include: the dynamic distortion of the pressure tubing, the conformity between the installation position and the model surface, the effect of temperature on the zero point and sensitivity, the uncertainty of the reference pressure, the difference between the orifice-area average and the point value, and the residual timing correction of multi-point measurement. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

The dynamic distortion of the pressure tubing is the component most easily underestimated in this type of measurement: the tube length, tube diameter, and bubbles in the tube together constitute a low-pass stage, with amplitude attenuation and phase lag occurring simultaneously, and for flush mounting the calibration should confirm that the installation has not introduced additional filtering, echoing the installation requirement of 2.3.3.

#### 2.3.5 Common Errors

- Using a sensor whose range covers only the dynamic component to measure deep-water static pressure.
- Using a long tube without dynamic calibration.
- Not checking the channel sampling mode and timing of multi-point pressure measurement.
- Not accurately recording the position of the pressure taps on the model surface.
- Requiring a piezoelectric sensor to output a static component.

#### 2.3.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices corresponding to the principles in 2.3.2: Amazon UK entries were queried on 2026-10-06, in pounds sterling including VAT; Taobao entries were queried on 2026-10-15, in renminbi, mostly listings by industrial-control traders with many negotiable items, given only as an order-of-magnitude reference.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Piezoresistive pressure transmitter | 1/8″ NPT stainless-steel pressure transmitter | 4–20 mA output | Industrial component | £14.78 | Amazon UK 2026-10-06 | Unit price |
| Piezoresistive pressure transmitter | TICFOX G1/4″ pressure sensor | 4–20 mA output | Industrial component | £18.89 | Amazon UK 2026-10-06 | — |
| Piezoresistive pressure transmitter | ViaGasaFamido silicon piezoresistive transmitter | G1/4″, 4–20 mA | Industrial component | £24.06 | Amazon UK 2026-10-06 | Same page also has a silicon piezoresistive type at £26.40 |
| Level (pressure-type) transmitter | TL-136 | 0–3 m, 4–20 mA | Industrial component | £24.19 | Amazon UK 2026-10-06 | Same model as in 2.1.6, cross-referenced |
| Flush-diaphragm pressure transmitter | Waterproof flush-diaphragm pressure transmitter | Sanitary anti-clogging diaphragm type; 4–20 mA / RS485 | Industrial component | ¥95 | Taobao 2026-10-15 | Xiamen Kechuan Technology, 8-year-old store |
| Flush-diaphragm pressure transmitter | PCM350 flat-diaphragm pressure transmitter (flush diaphragm) | Diffused silicon; 0.5%FS (default), 0.2%FS | Industrial component | ¥210 | Taobao 2026-10-15 | Suzhou Xuansheng Instrumentation Sensors, 16-year-old store; 100+ purchases |
| Flush-diaphragm pressure transmitter | Industrial flat-diaphragm pressure transmitter | 304 stainless steel; corrosion-, wear-, and clog-resistant (sediment, viscous materials) | Industrial component | ¥400 | Taobao 2026-10-15 | Enterprise store of a professional sensor service provider |
| Piezoelectric pressure sensor | XYY1001 | IEPE (integrated electronics piezoelectric) / PE (charge output); surface wall pressure, blast pressure, free-field pressure | Industrial component | ¥1100 | Taobao 2026-10-15 | Xiyuan Electronic Technology, 9-year-old store |
| Piezoelectric pressure sensor | KT series | Charge / IEPE; blast pressure, surface wall pressure | Industrial component | ¥1500 | Taobao 2026-10-15 | Yangzhou Ketu Electronics; 14 purchases |
| Piezoelectric pressure sensor | Shiao ICP (IEPE) type | Collision, explosion, underwater shock-wave pressure | Industrial component | ¥1500 (after discount) | Taobao 2026-10-15 | Shiao Family Mall, 11-year-old store; page shows "after discount" price |
| Quartz resonant pressure sensor | Downhole quartz resonant pressure sensor | High accuracy, high stability; intelligent completion | Industrial component | ¥1990 | Taobao 2026-10-15 | Mars Sensor Mall, Shanghai, 10-year-old store |
| Quartz resonant pressure sensor | PAROSCIENTIFIC 245A-204 | High-accuracy quartz resonant (complete instrument) | Second-hand / repair item | ¥2098.99 to ¥2188.80 (negotiable) | Taobao 2026-10-15 | Several sellers list "negotiable repair"; transaction price requires inquiry; another listing at ¥2009.90 |
| Quartz resonant pressure sensor | Downhole quartz resonant intelligent-completion logging tool | Custom complete instrument | Complete system | ¥27000 | Taobao 2026-10-15 | A6 Machinery Equipment Factory; custom item |
| Electronic pressure scanner | Pressure scanner (multi-channel pressure acquisition instrument) | Multi-channel pressure acquisition | Industrial-control listing | ¥300 | Taobao 2026-10-15 | Given as a lower-bound price reference, not laboratory grade |
| Electronic pressure scanner | RS-PAS16A | 16-channel synchronous acquisition, high accuracy | Complete system | ¥10000 | Taobao 2026-10-15 | Xi'an, Shaanxi; same model also listed at ¥30000; many negotiable items, transaction price requires inquiry |
| Electronic pressure scanner | Hanghua PSU16 (sixteen channels) | 0.1%FS; 750 Hz/channel | Complete system | ¥52000 | Taobao 2026-10-15 | Dalian Hanghua Technology enterprise store |
| Electronic pressure scanner | Ketu KT-PS32 | ±0.05%FS; 0–10 kHz; 24-bit AD | Complete system | ¥200000 | Taobao 2026-10-15 | Ketu Measurement & Control enterprise store; similar 64-channel model (Hanghua PSU64) at ¥149000 |

Flush-mounted miniature sensors, piezoelectric dynamic pressure sensors, quartz resonant absolute-pressure sensors, and pressure scanners have no corresponding finished products on Amazon UK; Taobao has corresponding listings (see table), among which the quartz resonant type is dominated by second-hand, repair, and custom items, and the multi-channel scanners span the widest price range. The table contains industrial components and complete-instrument listings, which are not on the same tier as laboratory-grade dynamic pressure sensors; laboratory-grade products still require quotation.

Main supply channels: Keller, Honeywell, Endevco, Kulite, Validyne, Paroscientific (pressure measurement); PCB Piezotronics, Kistler (dynamic pressure and charge conditioning); Scanivalve, Pressure Systems (multi-channel pressure scanning). Channel websites are given in Appendix C.

### 2.4 Flow Velocity and Turbulence

#### 2.4.1 Measurement Target and Criteria

The objects of measurement include single-point instantaneous three-dimensional flow velocity, velocity profiles, full-field velocity fields, and the turbulence quantities derived from them: turbulence intensity, Reynolds stress, the turbulent kinetic energy spectrum, the vorticity field, boundary-layer parameters, and wall shear stress. Reynolds stress represents the momentum transport caused by turbulent fluctuations; the turbulent kinetic energy spectrum gives the distribution of fluctuating kinetic energy over frequency; the vorticity field describes the local rotation intensity; and wall shear stress is the tangential force of the fluid on the wall.

These methods differ mainly in the following respects. First, whether time-averaged quantities or turbulence statistics are required, with turbulence statistics placing much higher demands on sampling rate and measurement volume. Second, whether point measurement or full-field measurement is required. Third, whether the flow contains bubbles, sediment, or strong free-surface interference, which directly excludes or restricts certain principles. Fourth, whether the measurement volume is comparable to the numerical grid being compared — the sampling volume of a probe or tracer particles (tiny particles that follow the fluid motion) itself constitutes a spatial filtering, and when the volume is too large, high-frequency turbulence information is already averaged out at the measurement stage. For the velocity-profile and turbulence-level requirements in tanks see the ITTC current-generation procedure (ITTC 2024, 7.5-02-07-01.6).

Further derived from the flow velocity are dimensionless and statistical parameters: turbulence intensity (the ratio of the RMS of the fluctuating velocity to the mean velocity), Reynolds-stress components, the turbulent kinetic energy spectrum, the integral scale and Taylor scale (characterising the energy-containing large-scale eddies and the dissipative small-scale eddies respectively), wall shear stress, and coherent structures (spatially ordered motions that recur in turbulence). Point measurement and full-field measurement differ greatly in capability for these derived quantities — a long single-point record gives time statistics, and full-field instantaneous data give spatial structure, and the two cannot replace each other.

#### 2.4.2 Comparison of Principle Routes

The six measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Acoustic Doppler velocimetry (ADV) | Contact (probe in water) | Doppler frequency shift of scatterers | Flow velocity converted from the frequency shift |
| 2. Acoustic Doppler current profiling (ADCP) | Contact (instrument immersed in water) | Range-bin Doppler frequency shift along the beams | Velocity of each water layer solved from the Doppler shift and beam geometry |
| 3. Laser Doppler velocimetry (LDV) | Non-contact | Frequency shift of light scattered by tracer particles | Velocity converted from the Doppler burst frequency and fringe spacing |
| 4. Particle image velocimetry (PIV) | Non-contact | Displacement of particle image pairs | Converted from displacement and time interval |
| 5. Hot-film and hot-wire | Contact | Change in the probe's heat transfer (resistance) | Converted through a calibration curve |
| 6. Electromagnetic velocimetry | Contact | Induced electromotive force in the conductive water body | Flow velocity converted from the induced EMF and a calibration relationship |

**1. Acoustic Doppler velocimetry (ADV)**

**Working principle:** The probe transmits sound pulses, and tiny suspended particles moving with the water provide scattered echoes; the motion of the particles relative to the probe changes the echo frequency, and the velocity components are solved from the frequency shift combined with the geometry of the transmitting and receiving beams. The receiving beams in different directions correspond to the same small measurement volume, and three-dimensional velocity is obtained through a coordinate transformation (Nortek, n.d.-b).

**Typical magnitudes and limitations:** Velocity ranges of ±0.01/0.1/0.3/1/2/4/7 m/s (software-selectable), accuracy ±0.5% of the measured value ±1 mm/s (the error being the sum of a "part proportional to the reading" and a "fixed part that does not scale with the reading"); sampling-volume diameter 15 mm, height 8 mm, output sampling rate 1–64 Hz, internal sampling rate 1–703 Hz (Nortek, 2026).

**Advantages:** Can give three-dimensional instantaneous velocity, hence usable for turbulence statistics.

**Limitations:** The raw record contains spikes that require denoising, commonly using the phase-space threshold method (identifying and removing spikes according to thresholds set in phase space), as described in Goring and Nikora (2002); bubbles, insufficient scattering, or high sediment concentration reduce the echo correlation and increase noise, and the probe itself disturbs the flow field (Nortek, n.d.-b).

**2. Acoustic Doppler current profiling (ADCP)**

**Working principle:** The instrument transmits sound pulses along its beams; the echo does not come from a single point — the farther the scatterer, the later the echo returns. The instrument slices the echoes by arrival time into segments (range bins, i.e. layers in the water column), measures the Doppler frequency shift of each segment separately, and obtains a layer-by-layer velocity profile. In wave mode, wave orbital velocities are sampled at high frequency in the layers near the surface and the free surface is inverted according to linear wave theory.

**Typical magnitudes and limitations:** The 300/600/1200 kHz models have maximum profiling ranges of 160/70/20 m respectively, velocity accuracy ±0.3% to ±1.0% of the measured value, and a typical ping rate of 2 Hz (i.e. 2 profiles updated per second); beam angle 20° (Teledyne RDI, 2026).

**Advantages:** A profile is obtained from a single deployment, and the wave spectrum can be inverted in wave mode.

**Limitations:** Blind zones near the bottom and the surface, and coarser spatial resolution than point measurement.

**3. Laser Doppler velocimetry (LDV)**

**Working principle:** Two coherent beams form interference fringes in the measurement volume; as tracer particles pass through, the intensity of the scattered light varies with a frequency, from which the velocity component is obtained.

**Typical magnitudes and limitations:** The measurement volume is about 0.1 to 1 mm, i.e. the spatial resolution is of the same order (Dantec Dynamics, 2026a); the sampling rate is very high.

**Advantages:** No disturbance, high time resolution, suitable for turbulence-spectrum measurement.

**Limitations:** Requires light transmission and tracer particles; single-point measurement; time-consuming optical alignment.

**4. Particle image velocimetry (PIV)**

**Working principle:** A camera records image pairs of tracer particles, and the velocity field is converted from the displacement of the image pairs and the known time interval (Adrian, 1991).

**Typical magnitudes and limitations:** Full-field measurement; the spatial resolution depends on the camera, lens, and field of view: resolution, field of view, and time resolution constrain one another.

**Advantages:** Gives full-field instantaneous structure; can be extended to stereo and volumetric measurement (Raffel et al., 2007).

**Limitations:** For the calibration and tracer-particle management requirements see the ITTC PIV and stereo PIV (SPIV) guide (ITTC 2024, 7.5-02-01-04, §5.6 and §7); for uncertainty evaluation see Sciacchitano (2019).

**5. Hot-film and hot-wire**

**Working principle:** The probe is heated above the fluid temperature; the heat carried away by the fluid varies with the flow velocity, and the flow velocity is obtained from the probe resistance (or the current required to maintain a constant temperature).

**Typical magnitudes and limitations:** Mainly used for near-wall and high-frequency turbulence measurement, with probe dimensions of the order of millimetres or smaller.

**Advantages:** A common means of wall shear stress and high-frequency fluctuation measurement.

**Limitations:** Fragile probe, requires frequent calibration, sensitive to water quality and temperature.

**6. Electromagnetic velocimetry**

**Working principle:** A conductive water body moving in a magnetic field produces an induced electromotive force, from which the velocity component perpendicular to the magnetic field direction is obtained.

**Typical magnitudes and limitations:** The range is on the low-to-medium side, suitable for turbid sediment-laden water; sensitive to conductivity and temperature changes.

**Advantages:** Suitable for turbid and sediment-laden water.

**Limitations:** Zero-point drift and poor low-frequency response.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Sediment-laden and aerated conditions |
| --- | --- | --- | --- | --- |
| 1. Acoustic Doppler velocimetry (ADV) | Applicable | Not evaluated | Not evaluated | Restricted |
| 2. Acoustic Doppler current profiling (ADCP) | Applicable | Applicable | Applicable | Restricted |
| 3. Laser Doppler velocimetry (LDV) | Applicable | Not evaluated | Not evaluated | Restricted |
| 4. Particle image velocimetry (PIV) | Applicable | Not evaluated | Not evaluated | Restricted |
| 5. Hot-film and hot-wire | Applicable | Not evaluated | Not evaluated | Restricted |
| 6. Electromagnetic velocimetry | Not evaluated | Applicable | Not evaluated | Applicable |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the four criteria of 2.4.1 (time-averaged quantities or turbulence statistics, point or full-field measurement, the presence of bubbles/sediment or strong free-surface interference, and whether the measurement volume is comparable to the numerical grid), the choice among the principles is as follows.

Point measurement is dominated by acoustic Doppler and hot-film/hot-wire methods, among which acoustic Doppler usually uses natural scattering particles (seeding may be needed in clean water) and can give three-dimensional components; full-field measurement is dominated by PIV and requires tracer particles and light-transmission conditions; LDV is suitable for single-point high-time-resolution measurement. Electromagnetic velocimeters are suitable for turbid sediment-laden water, at the cost of zero-point drift and a lower low-frequency response. Spatial resolution and time resolution constrain each other: the larger the field of view, the lower the spatial resolution; the higher the sampling rate, the shorter the recordable duration. Bubbles and high sediment concentration may degrade acoustic and optical measurements, with the degree depending on echo and imaging conditions.

#### 2.4.3 Implementation Considerations for the Three Scenarios

**Tank test:** The realisation of the tank current conditions (horizontal velocity profile, vertical profile, and turbulence intensity) is given in the ITTC current-generation procedure (ITTC 2024, 7.5-02-07-01.6). Acoustic Doppler is the workhorse for point velocity measurement. The key task in use is spike removal, commonly using the phase-space threshold method; the removal ratio and the algorithm used must be stated in the test records, because different denoising strategies change the turbulence statistics; for denoising methods see Goring and Nikora (2002), and for the applicable conditions of acoustic Doppler measurement see Jaafar et al. (2009) and Rowe et al. (2026). The measurement volume should avoid the free surface, the model wall, and bubble regions. The PIV post-processing parameters (interrogation-window size, overlap ratio, and smoothing method) should also be stated: the interrogation window is the image region matched block by block in the correlation computation, and the overlap ratio is the overlap fraction between adjacent windows.

PIV is the workhorse for full-field measurement. The density and following fidelity of the tracer particles are the main error sources: the choice and following fidelity of the tracer particles affect the measurable turbulence scales (ITTC 2024, 7.5-02-01-04, §5.6); for the basic principles and implementation see Adrian (1991), Westerweel (1997), and Raffel et al. (2007), for uncertainty evaluation see Sciacchitano (2019), and for an open-source implementation see Thielicke and Stamhuis (2014). Through calibration, imaging converts the particle displacement on the image plane (in pixels) into physical scales, and the accuracy of the calibration determines the spatial accuracy of the velocity field (ITTC 2024, 7.5-02-01-04, §7). The full-field velocity field under breaking-wave conditions can be measured with PIV (Chang & Liu, 1997). For the characterisation of the flow field and turbulence intensity in a facility see Sutherland et al. (2017). The PIV of the main tank is limited by optical accessibility; the window conditions of the compact wave tank are more suitable for full-field measurement; and the stereo PIV of the fully turbulent flow flume is specifically aimed at near-wall flow.

When high-resolution turbulence statistics or wall shear stress are needed, the fully turbulent flow flume is appropriate, because the two limitations of probe flow disturbance and optical accessibility in a tank are significantly relieved in the flow flume.

Acoustic measurement has one further special problem in a towing tank: the carriage motion makes the measurement coordinate system non-inertial, so if the inflow is measured by a towed model, the reference frame of the velocity measurement must be explicitly corrected in data processing.

**Field sea trial:** The ADCP is the workhorse, giving the velocity profile and wave information simultaneously. The near-bottom and near-surface blind zones are limitations that must be considered when designing the deployment depth. In highly sediment-laden waters, acoustic methods are affected by the scatterer concentration and require cross-validation with optical or electromagnetic means.

**Long-term monitoring:** Long-term flow-velocity observation relies on low-power self-contained instruments (with their own power and storage, deployable independently), with battery and storage as the main constraints. To extend the lifetime, the sampling rate and duty cycle (the fraction of the recording period during which the instrument operates) are usually reduced, which sacrifices turbulence-statistics capability and retains only the mean flow and low-frequency variations. In long-term deployment, biofouling changes the response of acoustic transducers and electromagnetic probes, and antifouling measures are required.

#### 2.4.4 Calibration and Uncertainty

Acoustic Doppler instruments need calibration at known flow velocities, commonly using a towing flume or a rotating-arm facility to provide the standard velocity. The sound speed varies with temperature and salinity, and the in-water sound speed must be compensated for the actual conditions, otherwise the velocity is systematically offset; the sound speeds in salt water and fresh water are different, and the calibration coefficients cannot be interchanged.

The calibration of PIV is the calibration of the imaging system, including lens distortion, the position of the calibration target, and the conversion between pixels (a single photosensitive unit on the camera sensor) and the actual scale; the calibration residual converts directly into the uncertainty of the velocity field, and the open-source tool can be found in Thielicke and Stamhuis (2014).

Uncertainty components specific to flow-velocity and turbulence measurement include: non-ideal tracer or scattering conditions, probe disturbance of the flow field, the reference-velocity uncertainty of the calibration facility, sound-speed compensation error, the spatial averaging caused by the sampling volume, and the statistical bias introduced by the denoising algorithm. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01). For PIV uncertainty evaluation see Sciacchitano (2019).

#### 2.4.5 Common Errors

- Using undenoised acoustic Doppler data directly for turbulence statistics.
- Not evaluating the following fidelity of the tracer particles.
- Not reporting the PIV calibration residual.
- Using low-sampling-rate data to compute high-frequency turbulence spectra.
- Not correcting the towed coordinate system.
- Inferring turbulence characteristics from long-term low-duty-cycle data.

#### 2.4.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of the sensors and accessories required by the principles in 2.4.2, with a query date of 2026-10-06, all sourced from Amazon UK product pages, with prices in pounds sterling including VAT.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Ultrasonic (clamp-on) flowmeter | Ultrasonic Clamp-On Flow Meter | IP68, liquid pipelines | Industrial component | £76.77 | Amazon UK 2026-10-06 | Component-level reference |
| Ultrasonic (clamp-on) flowmeter | TUF-2000B/2000M | DN25–6000 pipe diameters | Industrial component | £158.48 | Amazon UK 2026-10-06 | — |
| Ultrasonic (clamp-on) flowmeter | Bonvoisin handheld | S1+M2 probes | Industrial component | £479.83 | Amazon UK 2026-10-06 | Handheld complete instrument |
| Thermal anemometer (hot-film / hot-wire principle) | BTMETER BT-100 | Handheld, wind speed and temperature | Industrial component | £24.64 | Amazon UK 2026-10-06 | Cross-referenced with 2.12 |
| Thermal anemometer (hot-film / hot-wire principle) | Bonvoisin thermal anemometer | CFM/CMM | Industrial component | £129.00 | Amazon UK 2026-10-06 | — |
| Electromagnetic flowmeter | Electromagnetic flowmeter DN10–DN100 | 0–30 m³/h, 4–20 mA | Industrial component | £335.16 | Amazon UK 2026-10-06 | Corresponds to the electromagnetic velocimetry principle |
| Electromagnetic flowmeter | High-accuracy electromagnetic flowmeter | 4–20 mA output | Industrial component | £469.11 | Amazon UK 2026-10-06 | — |

Acoustic Doppler point velocimeters, ADCPs, LDV systems, and PIV systems have no corresponding finished products on Amazon UK, and their published prices require quotation. The flowmeters and anemometers in the table are industrial components, given only as price references for the principles, and are not on the same tier as laboratory-grade velocimetry equipment.

Main supply channels: Nortek, SonTek, Teledyne RDI (acoustic velocimetry); Dantec Dynamics, TSI, LaVision (laser and optical velocimetry). Channel websites are given in Appendix C.

### 2.5 Rigid-Body Motion and Attitude

#### 2.5.1 Measurement Target and Criteria

The objects of measurement are the six-degree-of-freedom motions of a rigid body: three translational displacements and three rotational angles, together with their velocities and accelerations. In offshore-engineering tests, the focus is on the three main degrees of freedom of heave (vertical translation), pitch, and roll, with the time scales of slow-drift motion (low-frequency drift driven by second-order forces, with periods much longer than the waves) and wave-frequency motion (the response at the same period as the waves) handled separately. Motion, motion rate, and acceleration are parameters that should be measured in tests (ITTC 2024, 7.5-02-07-02.1, §2.9). Quantities derived from the motion time history include: the amplitude and phase of each degree of freedom, the natural period and damping ratio, the low-frequency component of slow-drift motion, the phase relationship between motion and waves, and the transfer relationship between motion and loads.

These methods differ mainly in the following respects. First, whether absolute or relative motion is measured; when relative motion is measured, the measurement-point position should be relatable to wave and other motion data (ITTC 2024, 7.5-02-07-02.1, §2.9). Second, whether the frequency band of interest falls in the slow-drift band or the wave-frequency band. Third, whether the field of view will be occluded by the model, carriage, or mooring lines, and whether ferromagnetic interference affecting the magnetometer scheme is present in the environment. Fourth, whether real-time output is required: when motion capture is used for closed-loop control (feeding real-time pose back to the actuator) or online monitoring, the solution latency (the time from exposure to pose output) and the update rate (how many sets of pose are output per second) matter as much as accuracy.

Besides the pose itself, the derived quantities to be delivered must be determined in advance. Modal frequency and damping ratio (the frequency and damping corresponding to each order of natural vibration of the structure), slow-drift amplitude and period, the phase difference between motion and waves, and the transfer relationship between motion and loads place different requirements on sampling rate, record length, and filtering: slow-drift quantities require long records and low-pass filtering, while modal quantities require a sufficient update rate and multi-channel synchronisation (all channels sampled to the same time base). The slow-drift force is the difference of small quantities over several wave periods (a second-order small quantity, with amplitude far smaller than the wave-frequency force), and is therefore especially sensitive to low-frequency noise and processing methods.

#### 2.5.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Optical motion capture | Non-contact (requires line of sight) | Image coordinates of markers | Pose solved by multi-camera intersection |
| 2. Inertial measurement unit (IMU) | Contact (fixed to the model) | Angular velocity and specific force | Attitude and position obtained by integration |
| 3. Draw-wire and potentiometer | Contact (mechanical connection) | Draw-wire length and potentiometer voltage division | Displacement converted through geometry |
| 4. Laser displacement | Non-contact (requires line of sight) | Distance from the measurement point to a reference plane | Displacement obtained from the ranging value and installation geometry |
| 5. Vision photogrammetry | Non-contact (requires line of sight) | Coordinates of feature points in the image | Three-dimensional coordinates reconstructed through a calibration relationship |

**1. Optical motion capture**

**Working principle:** Several cameras photograph markers attached to the model synchronously, the three-dimensional positions of the markers are intersected from the image coordinates of each camera, and the six-degree-of-freedom pose is solved from the rigid-body geometry formed by the markers.

**Typical magnitudes and limitations:** Taking the Qualisys optical motion-capture system as an example: cameras are available in three resolutions of 1/2/4 megapixels, the three-dimensional resolution at 10 m distance can reach 0.07–0.14 mm (depending on the model and lens), and low-latency real-time output is a design goal; the actual resolution still depends on the baseline length (the spacing between cameras) and the calibration quality (Qualisys, 2026). The KHL main tank is equipped with a real-time non-contact optical motion-capture system (University of Strathclyde, n.d.).

**Advantages:** Non-contact, no integration drift, can give all six degrees of freedom simultaneously and output in real time.

**Limitations:** Requires a maintained line of sight; occlusion by the model body, carriage structure, and mooring lines causes marker loss; when observing underwater markers through the water surface, the surface varies with time and refraction introduces a systematic bias.

**2. Inertial measurement unit (IMU)**

**Working principle:** Gyroscopes measure angular velocity; accelerometers measure **specific force**, i.e. the non-gravitational resultant force per unit mass (equal to the difference between the motion acceleration and the gravitational acceleration), and attitude, velocity, and position are obtained through attitude solution and integration.

**Typical magnitudes and limitations:** Industrial-grade devices have an angular resolution of 0.001°, a static roll and pitch (i.e. roll and pitch) accuracy of about 0.5° RMS and dynamic accuracy of about 1.0° RMS, a heave accuracy of about 5% or 5 cm, and delayed heave of about 2% or 2 cm; the attitude data update rate can reach 400 Hz and the inertial data 800 Hz (VectorNav, 2026).

**Advantages:** Small size, no line of sight required, can directly give angular velocity and acceleration.

**Limitations:** Position is obtained by integration, and the error accumulates with time; the yaw angle (rotation about the vertical axis) and absolute position require an external reference.

**3. Draw-wire and potentiometer**

**Working principle:** The principle is given in Principle 3 of 2.8.2. When used for pose measurement, one end of the draw-wire is fixed to the model and the other end is connected to a displacement transducer, and the displacement component in that direction is converted from the change in draw-wire length.

**Typical magnitudes and limitations:** The range is from hundreds of millimetres to tens of metres, with millimetre-level resolution; after long-term use the draw-wire tension and winding consistency change the calibration and require periodic re-verification.

**Advantages:** Simple structure, low cost, no dependence on line of sight.

**Limitations:** A contact measurement; the draw-wire tension and inertia impose an additional constraint on the model; a single channel gives only the displacement in one direction.

**4. Laser displacement**

**Working principle:** The principle is given in Principle 1 of 2.8.2 (laser triangulation displacement). When used for pose measurement, the displacement component in a single direction is obtained from the distance from the measurement point to a reference plane.

**Typical magnitudes and limitations:** Single-point ranges from millimetre to metre level, with resolution down to the micrometre level and sampling rates up to the kHz level (see 2.8).

**Advantages:** Non-contact, high single-point accuracy.

**Limitations:** Requires a maintained line of sight, limited range; refraction correction is needed in water.

**5. Vision photogrammetry**

The difference from optical motion capture: the latter relies on dedicated markers and a camera network to output rigid-body pose in real time; photogrammetry is more general, usually reconstructing feature-point coordinates or full-field deformation offline, without a real-time requirement.

**Working principle:** From image sequences of one or more cameras, the three-dimensional coordinates of feature points are reconstructed through a calibration relationship, and pose or deformation is then converted.

**Typical magnitudes and limitations:** The accuracy depends on the calibration quality, camera resolution, and baseline length; sub-millimetre levels are achievable on land, while at the water surface the refraction and lighting limitations usually put it in the millimetre-to-centimetre range.

**Advantages:** Non-contact, can give full-field information, not limited to discrete markers.

**Limitations:** Complex post-processing; underwater imaging quality is affected by turbidity and lighting.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Occluded conditions |
| --- | --- | --- | --- | --- |
| 1. Optical motion capture | Applicable | Not evaluated | Not evaluated | Restricted |
| 2. Inertial measurement unit (IMU) | Applicable | Applicable | Not evaluated | Applicable |
| 3. Draw-wire and potentiometer | Applicable | Not evaluated | Not evaluated | Applicable |
| 4. Laser displacement | Applicable | Not evaluated | Not evaluated | Restricted |
| 5. Vision photogrammetry | Applicable | Not evaluated | Not evaluated | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the four criteria of 2.5.1 (absolute or relative motion, slow-drift band or wave-frequency band, occlusion and ferromagnetic interference, and whether real-time output is required), the choice among the principles is as follows.

Optical motion capture has the highest accuracy and can give six degrees of freedom simultaneously, but requires line of sight, with both occlusion and water-surface refraction needing handling; inertial units do not require line of sight and can directly output angular velocity and acceleration, at the cost of position being obtained by integration with error accumulating over time. Draw-wire and laser displacement give only single-direction displacement and have a simple structure, but the former imposes a constraint force on the model and the latter requires line of sight.

Quasi-static and slow-drift measurement requires low drift, while the amplitude and phase in the wave-frequency band depend more on the sampling rate and time synchronisation. If the natural period of the constraint system is close to that of the model, the two will couple, and what is measured is the combined motion of the constraint system and the model, which distorts the roll damping; this is particularly prominent in roll-damping-type tests.

#### 2.5.3 Implementation Considerations for the Three Scenarios

**Tank test:** Optical motion capture is the main scheme of the main tank (University of Strathclyde, n.d.). Three problems must be handled in advance in use: water-surface refraction, occlusion, and coordinate-system alignment.

Water-surface refraction: when the camera observes underwater markers through the water surface, the surface is curved and varies with time, and refraction introduces a systematic bias (Maas, 2015); the calibration should be carried out under water-surface conditions similar to the actual test, and the refraction correction should be explicitly incorporated into the calibration model (González-Vera et al., 2020).

Occlusion: large models, carriage structures, and mooring lines cause marker loss; the scheme should use redundant markers beyond what is required for the solution, and configure fault-tolerance and interpolation strategies in the solving software, with the reconstruction method for gaps given in Gomes et al. (2021).

Coordinate-system alignment: the optical system gives the pose in the camera coordinate system, which must be related through an explicit mapping to the tank coordinate system, the wave propagation direction, and the still-water reference state of the model, and recorded in the test records (ITTC 2024, 7.5-02-07-02.1, §2.15).

There are also two points in parameter selection. First, the sampling rate and field of view must match the motion frequency band of interest: slow-drift motion has a large amplitude and low frequency, while wave-frequency motion requires a higher update rate, and when one system covers both, a compromise is usually needed in the calibration and solving settings such as exposure, smoothing and filtering, and update rate. Second, the marker support should be as light and stiff as possible, because the vibration of the support itself is superimposed on the measured motion as a spurious signal. Motion measurement for high-speed-vessel-type conditions has a separate procedure giving the requirements for measurement-system arrangement and sampling (ITTC 2024, 7.5-02-05-04).

The determination of roll damping has a separate set of practices. Roll damping is determined from roll-decay tests in still water (ITTC 2024, 7.5-02-07-04.5, §3.1). If a soft constraint is used to limit drift in the test, the natural period of the constraint system should be at least one order of magnitude larger than the model natural period; when regular waves are used, the natural period of the constraint system should be at least one order of magnitude larger than the smaller of the model natural period and the shortest wave period used (ITTC 2024, 7.5-02-07-04.5, §3.1.1). The decay curve can be analysed by the logarithmic decrement method, the Froude energy method, and the Roberts energy method (ITTC 2024, 7.5-02-07-04.5, §3.1.7). All three are common approaches for obtaining the damping coefficient from a free-decay curve, and the values taken differ. The relationship between the initial metacentric height and the roll period can be determined from an inclining test (ITTC 2024, 7.5-02-07-04.7).

**Field sea trial:** The combination of an IMU and a global navigation satellite system is the main scheme: the attitude accuracy depends on the grade of the inertial unit, and the position accuracy depends on the quality of the satellite positioning. In a pure inertial scheme, the position is obtained by integration and the error accumulates continuously in the absence of an external reference, so a field scheme must include an external reference.

Phenomena such as parametric roll (roll instability caused by the periodic variation of the restoring force in waves) place higher demands on the time synchronisation of the measurement: the phase relationships among roll, pitch, and ship speed are the basis for judging whether parametric roll occurs, and all channels must share the same time base; for related tests and analysis methods see the ITTC parametric-roll procedure (ITTC 2024, 7.5-02-07-04.3).

**Long-term monitoring:** Long-term monitoring is concerned with modal frequencies, fatigue-related response amplitudes, and extreme events, rather than precise pose at every instant. An accelerometer network combined with inclinometers is a common arrangement, requiring no line of sight; satellite positioning can be used to monitor slow cumulative displacement.

A long-term scheme should give a low-frequency drift budget at the design stage: displacement is obtained by double integration of acceleration, and any small zero bias accumulates into significant spurious displacement within hours, so long-term monitoring usually uses accelerometers only for relative comparison and modal tracking, leaving absolute displacement to satellite positioning.

#### 2.5.4 Calibration and Uncertainty

The optical system requires calibration of the camera intrinsic parameters (internal parameters such as focal length and pixel scale), extrinsic parameters (camera position and attitude), lens distortion, and the relative relationships among the cameras; after calibration, verification should be performed with a rigid body of known motion or known length. For underwater use, the refraction correction should be explicitly included in the calibration.

The factory calibration of an inertial unit includes the zero bias (the output when the input is zero), the scale factor (the error of the input-output proportionality coefficient), and the non-orthogonality error (cross-coupling caused by the three axes not being perpendicular); a zero-bias check is needed before use; temperature and magnetic-field environment change the zero bias, and a static zero-bias record should be taken once before and once after a long test.

Uncertainty components specific to rigid-body motion and attitude measurement include: coordinate-system alignment error (the mapping among the camera, tank, and model coordinate systems), the residual of water-surface refraction correction, the interpolation error caused by marker occlusion, the integration drift of the inertial unit and the drift of its zero bias with temperature, the additional relative motion introduced by the flexibility of the marker support, and the time-synchronisation error in the joint analysis of motion and force or wave surface. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

Parameters inverted from motion also carry method-level uncertainty. Roll damping is derived from a still-water decay test (giving the model an initial heel in still water and obtaining the damping from the free-decay curve), and its value depends on the method of analysing the decay curve — the logarithmic decrement, Froude energy, and Roberts energy methods do not give exactly the same result, and the test report should state the method used and the fitting interval (ITTC 2024, 7.5-02-07-04.5, §3.4). For processing parameters: the filter cutoff frequency, the detrending method, and the identification method for the modal frequency and damping ratio should be given, as these parameters directly determine the amplitude in the slow-drift and low-frequency bands.

#### 2.5.5 Common Errors

- Performing the optical calibration in an empty tank and only discovering the refraction bias during the test.
- Having just enough markers for the solution with no redundancy.
- Not recording the coordinate-system alignment in writing.
- Not performing before-and-after zero-bias checks on the inertial unit.
- Using the position integrated by the inertial unit as a reliable absolute position.
- After calibration, checking only with a static known length instead of with a known motion.
- Processing slow-drift motion and wave-frequency motion through the same filtering channel without reporting them separately.

#### 2.5.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.5.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. Optical motion-capture systems have no corresponding finished products on e-commerce platforms, and their published prices require quotation; the inertial-unit entries are component-level and module-level, not on the same tier as measurement-grade complete instruments. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Optical motion capture | — | The number of cameras and the software licence determine the range and accuracy | Complete system | Quotation required | Manufacturer quotation | No published price, quotation required |
| Inertial measurement unit (component-level) | MPU-9250 nine-axis module | 16-bit, with gyroscope and magnetometer | Component | £10.04 | Amazon UK 2026-10-06 | Component-level price reference only |
| Inertial measurement unit (component-level) | MPU-6050 six-axis module | 3-axis accelerometer + 3-axis gyroscope | Component | £8.59 | Amazon UK 2026-10-06 | — |
| Measurement-grade inertial unit | High-accuracy MEMS IMU (industrial-grade six-/nine-axis module) | Industrial-grade six-/nine-axis module | Component | ¥2,400 to ¥3,000 | Taobao 2026-10-06 | Guangdong, Zhengquan Surveying Instrument Wholesale Supermarket, etc.; component-level; same page also has a high-accuracy attitude sensor at ¥16,000 |
| Draw-wire and potentiometer displacement transducer | Draw Wire Encoder 10–1200 mm | Pulse push-pull output, 38 mm diameter, 1.5 m cable | Industrial component | £57.55 | Amazon UK 2026-10-06 | Draw-wire encoder type |
| Draw-wire and potentiometer displacement transducer | Incremental Cable Encoder 10–3000 mm | Incremental output, DC 8–24 V | Industrial component | £64.86 | Amazon UK 2026-10-06 | Maximum range 3 m |
| Draw-wire and potentiometer displacement transducer | Rod Type Linear Potentiometer 5–1000 mm | Resistive, 0.01 mm resolution | Component | £40.22 | Amazon UK 2026-10-06 | Potentiometer type, not encoder type |
| Laser displacement sensor | KJT-TG30 TOF Laser Sensor | 5 m range, NPN/PNP/RS485/4–20 mA, 9–36 V DC | Industrial component | £152.22 | Amazon UK 2026-10-06 | Time-of-flight type |
| Laser displacement sensor | 5 m Analog Laser Displacement Sensor | 0–10 V / 4–20 mA / RS485 output | Industrial component | £463.95 | Amazon UK 2026-10-06 | Analogue-output model |
| Laser displacement sensor | FSD25-100-AR | 0.01 mm, analogue voltage 0–10 V, with digital display | Industrial component | £600.70 | Amazon UK 2026-10-06 | — |

Main supply channels: Qualisys, Vicon, OptiTrack, PhaseSpace (optical motion capture); Xsens, VectorNav, SBG Systems, Advanced Navigation, Inertial Labs (inertial measurement); Keyence, Micro-Epsilon, SICK (laser displacement). Channel websites are given in Appendix C.

### 2.6 Acceleration and Vibration

#### 2.6.1 Measurement Target and Criteria

The object of measurement is the acceleration time history, used to derive vibration amplitude, frequency content, modal parameters (the natural frequency, damping ratio, and mode shape of each order of mode), and fatigue-related damage-equivalent quantities (quantities that convert random loading into equivalent fatigue damage). In tests it is necessary to distinguish steady-state vibration, shock transients, and random vibration, which have different requirements for range, bandwidth, and filtering.

Acceleration is among the parameters that should be measured in tests (ITTC 2024, 7.5-02-07-02.1, §2.9). In occasional events such as impact and green water, acceleration is used to provide check data for motion-derived acceleration and for the analysis of green water and slamming; in addition to the conventional measurement points, acceleration measurement points should also be arranged at the locations where deck green water and slamming occur, and the measured acceleration must be converted to the correct coordinate system (ITTC 2024, 7.5-02-07-02.3, §2.4.3).

These methods differ mainly in the following respects. First, the combination of range and bandwidth: shock conditions require a large range and high resonant frequency, while steady-state vibration can use a smaller range in exchange for higher resolution. Second, whether the DC component is needed — low-frequency modal identification and static inclination measurement require devices that can measure DC, and piezoelectric types have insufficient low-frequency response. Third, installation conditions: threaded mounting is preferred over magnetic and adhesive mounting, and the resonant frequencies of both the sensor and the mounting bracket must be higher than the upper limit of the frequency band of interest. Fourth, modal testing requires multi-channel synchronisation, and the time deviation between channels directly changes the modal phase.

Quantities derived from the acceleration time history include: vibration amplitude and spectrum, modal frequency and damping ratio, shock peak and action duration, fatigue damage-equivalent quantities, and band levels in one-third-octave or spectral-density form. Different derived quantities place different requirements on sampling rate and filtering, and the test records should state the data-processing chain (all processing steps and their parameters from the raw data to the derived quantities). Acceleration is the second derivative of displacement and is sensitive to high-frequency errors.

#### 2.6.2 Comparison of Principle Routes

The four measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Piezoelectric | Contact (fixed to the measurement point) | Charge produced by the piezoelectric element | Acceleration converted through charge or voltage sensitivity |
| 2. Capacitive MEMS (micro-electro-mechanical system) | Contact (fixed to the measurement point) | Displacement corresponding to the capacitance change | Acceleration converted from the capacitance change corresponding to the proof-mass displacement |
| 3. Piezoresistive | Contact (fixed to the measurement point) | Resistance change of the piezoresistive element | Acceleration converted from the output corresponding to the resistance change |
| 4. Optical and laser vibrometry | Non-contact (requires line of sight) | Displacement or velocity of the measurement point | Acceleration obtained by differentiation |

**1. Piezoelectric**

**Working principle:** The inertial proof mass applies a force to the piezoelectric element, producing a charge related to the acceleration. The charge-output type converts to voltage through an external charge amplifier, and the IEPE/ICP type completes the conversion with built-in circuitry and requires constant-current excitation (PCB Piezotronics, n.d.-d).

**Typical magnitudes and limitations:** Taking the PCB 352C33 as an example: sensitivity 100 mV/g, range ±50 g peak, broadband resolution 0.00015 g rms, frequency range (±5%) 0.5 to 10000 Hz, resonant frequency not less than 50 kHz, nonlinearity not more than 1%, transverse sensitivity not more than 5%, weight 5.8 g, operating temperature −54 to +93 °C; shock overload limit ±5000 g peak, base-strain sensitivity 0.003 g/µε (PCB Piezotronics, n.d.-b).

**Advantages:** Low noise, large dynamic range, resonant frequency far above the upper limit of the frequency band of interest.

**Limitations:** Cannot retain the DC component; the charge-output type requires a charge amplifier and low-noise cable, and the IEPE/ICP type requires constant-current excitation. Cables and conditioners affect the noise and frequency response, and the manner of this effect varies with the output type (PCB Piezotronics, n.d.-d).

**2. Capacitive MEMS**

**Working principle:** The inertial proof mass displaces under acceleration, causing a capacitance change, which is converted to acceleration by circuitry.

**Typical magnitudes and limitations:** Ranges of about ±2 g to ±16 g and bandwidths of several hundred hertz; can measure the DC component and static inclination, with higher noise than the piezoelectric type.

**Advantages:** Can monitor static quantities over the long term, small size, low power, easy to integrate.

**Limitations:** Higher noise than the piezoelectric type; limited shock range.

**3. Piezoresistive**

**Working principle:** The acceleration displaces the inertial proof mass; the displacement is converted through the piezoresistive element into a resistance change, and the bridge converts the resistance change into an output voltage proportional to the acceleration.

**Typical magnitudes and limitations:** Emphasises high shock ranges, up to thousands to tens of thousands of g, with resolution and bandwidth lower than the piezoelectric type.

**Advantages:** Suitable for high shock ranges.

**Limitations:** Lower sensitivity; larger temperature drift.

**4. Optical and laser vibrometry**

**Working principle:** The displacement or velocity of the measurement point is measured by laser interferometry or optical imaging, and acceleration is obtained by differentiation.

**Typical magnitudes and limitations:** Non-contact measurement, covering displacements from nanometres to millimetres with the corresponding vibration; the bandwidth and range vary with the configuration, and the equipment cost and commissioning complexity are relatively high.

**Advantages:** Non-contact, can measure small vibrations.

**Limitations:** Requires line of sight; high equipment cost and complexity.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Shock conditions |
| --- | --- | --- | --- | --- |
| 1. Piezoelectric | Applicable | Applicable | Not evaluated | Applicable |
| 2. Capacitive MEMS | Applicable | Not evaluated | Applicable | Not evaluated |
| 3. Piezoresistive | Applicable | Not evaluated | Not evaluated | Applicable |
| 4. Optical and laser vibrometry | Applicable | Not evaluated | Not evaluated | Not evaluated |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the four criteria of 2.6.1 (range and bandwidth, whether the DC component is needed, installation conditions, and multi-channel synchronisation for modal testing), the choice among the principles is as follows.

Piezoelectric types usually have a wide frequency band, with the actually usable band limited by the sensor and mounting resonances; they are suitable for shock and vibration but cannot measure the DC component. Capacitive MEMS can measure DC and static inclination, with higher noise than the piezoelectric type; piezoresistive types emphasise high shock ranges and have lower sensitivity; optical vibrometry is a non-contact measurement that can measure small vibrations but requires line of sight and a reflective surface. The effect of installation conditions on the result is often greater than that of the device itself: the resonant frequencies of both the sensor and the mounting bracket must be higher than the upper limit of the frequency band of interest, and threaded mounting is preferred over magnetic and adhesive mounting.

#### 2.6.3 Implementation Considerations for the Three Scenarios

**Tank test:** Acceleration measurement in a tank is used for structural vibration, slamming response, and modal identification. The installation method is the main source of error: magnetic or adhesive mounting is unreliable in humid environments and salt-water tanks, and threaded mounting is more stable; the resonant frequency of the sensor itself must be higher than the upper limit of the frequency band of interest, and after installation the resonance of the system formed by the sensor and bracket must also be checked (the mounting resonance is usually lower than the sensor's own resonance) — if the mounting resonance falls within the frequency band of interest, what is measured is mainly the vibration of the bracket rather than the motion of the measurement point.

A three-axis (or two-axis) accelerometer integrates three (or two) orthogonal sensitive elements in one housing, and the measurement principle is the same as the single-axis type. In vortex-induced vibration (VIV) tests, the vibration of the test rig (including the test-frame vibration) can be checked with three-axis accelerometers; three-dimensional model tests usually use two-axis accelerometers and/or strain sensors to measure the response of flexible cylinders, and instrument cables should not be arranged in positions that may affect the hydrodynamics (ITTC 2021, 7.5-02-07-03.10, §5.3). Before the test, a zero-level record should be acquired once with all measurement channels in still water, to identify electronic drift and serve as an additional check of the sensors (ITTC 2021, 7.5-02-07-03.10, §5.4.1).

The IEPE/ICP type is excited by a constant-current source, with power and voltage signal sharing the cable; the charge-output type is connected to a charge amplifier. Electromagnetic coupling between power lines and signal lines introduces mains-frequency and switching noise (PCB Piezotronics, n.d.-d). Modal testing often uses the signal of an impact hammer (a striking hammer with a force sensor) or an exciter (a controllable excitation device) as the reference, and the time consistency between the reference and response channels affects the modal phase.

The sampling rate for shock conditions should be determined by the rise time of interest, not by the upper frequency limit of interest: the sampling interval must be much smaller than the peak rise time, otherwise the peak is averaged and clipped. The test records should state the sampling rate, the cutoff frequency of the anti-aliasing filter (which suppresses components above the folding frequency before analogue-to-digital conversion), and whether the peak has been reconstructed.

**Field sea trial:** The difficulty of field acceleration measurement is distinguishing environmental excitation from structural response, and synchronised sea-state data are usually needed to interpret acceleration records. Conditions with strong shock require sensors with high shock-survival capability, and whether saturation has occurred should be recorded. Seakeeping tests for high-speed-vessel-type conditions have a separate procedure with specific requirements for acceleration measurement-point arrangement and report content (ITTC 2024, 7.5-02-05-04).

**Long-term monitoring:** Long-term monitoring is dominated by low-power capacitive devices, which can measure static inclination and have standby capability. Data are usually acquired under trigger conditions or after extracting statistical features before backhaul, which requires the feature-extraction criteria to be determined on site in advance.

Another constraint of long-term deployment is zero-bias stability: the zero bias of capacitive devices varies slowly with temperature and time and would be integrated into spurious velocity and displacement, so long-term schemes generally use only the statistics and peaks of acceleration and do not integrate it to obtain displacement.

#### 2.6.4 Calibration and Uncertainty

Piezoelectric accelerometers can be calibrated by the back-to-back comparison method (rigidly connected to a reference sensor and subjected to the same excitation) or with a laser vibrometer as the reference. The actual conditioner settings and cable arrangement affect the noise and frequency response; the mechanisms for the charge-output type and the IEPE/ICP type are different, and a whole-chain check can cover these factors (PCB Piezotronics, n.d.-d).

Uncertainty components specific to acceleration and vibration measurement include: installation conditions and mounting resonance (when the bracket resonance falls within the frequency band of interest, what is measured is the response of the bracket), the transverse sensitivity of the sensor itself, the effect of temperature on sensitivity and zero bias, the low-frequency and high-frequency cutoffs of the conditioner, the effect of cables on noise and frequency response, and the quantisation and aliasing of the analogue-to-digital conversion. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

After installation an in-situ check should also be performed: using a reference excitation of known magnitude (an impact hammer or a calibration exciter), compare the response in the installed state with that in the calibrated state, to confirm that the mounting surface, bracket, and cables have not introduced additional frequency-response distortion (amplitude and phase changes in the frequency band of interest). The identification error of the damping ratio is usually an order of magnitude larger than that of the modal frequency, and the test report should give the identification method and the confidence interval.

#### 2.6.5 Common Errors

- Not checking the mounting-bracket resonance.
- Using a piezoelectric sensor where the DC component is required.
- Not checking the effect of the actual conditioner settings and cable arrangement on noise and frequency response.
- A sampling rate insufficient to cover the frequency band of interest.
- Not checking whether the zero point has reset after an acceleration overload.
- An insufficient sampling rate for the shock peak without stating whether the peak has been clipped.

#### 2.6.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.6.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. For laboratory-grade piezoelectric models (PCB 352C33) the manufacturer does not publish a list price and a quotation is required; the remaining rows in the table give the published prices of similar models as reference. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Piezoelectric accelerometer | PCB 352C33 | 100 mV/g, ±50 g peak, 0.5 to 10000 Hz | Laboratory grade | Quotation required | Manufacturer quotation | PCB does not publish a list price, quotation required; published prices of similar IEPE single-axis models are given in other rows of this table |
| Piezoelectric accelerometer | IEPE SAED0005JB | ICP/IEPE, single-axis | Industrial component | £573.65 | Amazon UK 2026-10-06 | An IEPE single-axis model similar to the PCB 352C33, as a price reference for similar models |
| Piezoelectric accelerometer | Piezoelectric vibration acceleration sensor | For IEPE vibration measurement | Industrial component | ¥1,037 to ¥2,250 | Taobao 2026-10-06 | Nuoda Industrial-Control Industrial Enterprise Store, etc.; negotiable listing, not PCB original, as a price reference for similar IEPE models |
| Capacitive MEMS accelerometer | MPU-6050 three-axis module | 3-axis, I²C output | Component | £8.59 | Amazon UK 2026-10-06 | Component-level price reference only |
| Capacitive MEMS accelerometer | MPU-9250 nine-axis module | 16-bit, with magnetometer | Component | £10.04 | Amazon UK 2026-10-06 | — |
| Piezoresistive high-shock sensor | High Shock Resistant Accelerometer 10000g | 10000 g range | Industrial component | £14.74 | Amazon UK 2026-10-06 | — |
| Capacitive MEMS high-shock accelerometer | ADXL375 high-g accelerometer module | ±200 g, I2C/SPI | Component | £34.91 | Amazon UK 2026-10-06 | Component-level; differential-capacitance principle (Analog Devices, 2014) |
| Piezoelectric high-shock accelerometer | Piezoelectric high-shock charge acceleration sensor | Charge-output type, high-shock range | Industrial component | ¥1,908 | Taobao 2026-10-06 | Charge-output type |
| Constant-current conditioner | IEPE/ICP miniature signal conditioner, constant-current-source transmitter | Single channel | Industrial component | ¥422 | Taobao 2026-10-06 | Linghang Vibration Sensor Measurement & Control manufacturer; lower end of this category |
| Constant-current conditioner | LH single-channel IEPE signal conditioner, constant-current source | Single channel | Industrial component | ¥780 | Taobao 2026-10-06 | Linghang Vibration Sensor Measurement & Control manufacturer |
| Constant-current conditioner | Chengke CT5201 constant-current adapter (IEPE signal conditioner) | Single channel | Industrial component | ¥960 | Taobao 2026-10-06 | Yankun Vibration Sensor Enterprise Store, etc. |

Main supply channels: PCB Piezotronics, Endevco, Kistler, Brüel & Kjær (piezoelectric and signal conditioning); Analog Devices, Silicon Designs (MEMS). Channel websites are given in Appendix C.

### 2.7 Strain and Deformation

#### 2.7.1 Measurement Target and Criteria

The object of measurement is the strain on the surface of a structure. Applications include structural load inversion, fatigue-life assessment, the along-length response of vortex-induced vibration, and condition monitoring of composite structures.

These methods differ mainly in the following respects. First, the number and distribution of measurement points: a single-point strain reflects only the local state, while load inversion requires several measurement points arranged along the structure with their positions and orientations known. Second, whether continuous measurement along the whole structure is required, which determines the choice between foil strain gauges and distributed fibre optics. Third, the structure material and surface condition: the bonding and embedding processes differ for metals, composites, and thin shells. Fourth, whether long-term survival is required, which determines the grade of protection, encapsulation, and potential isolation.

Quantities derived from strain include: the strain time history and amplitude at the measurement points, the along-length strain distribution, the vertical bending moment inverted from strain, and accumulated fatigue damage. Inversion-type derived quantities depend on the measurement-point arrangement and calibration matrix far more than the single-point quantity itself.

The working principle of the strain-gauge type (foil strain gauge) is given in 2.7.2; the strain-gauge elements appearing in 2.2 Forces and Moments and 2.9 Torque and Rotational Speed give only magnitudes and limitations.

#### 2.7.2 Comparison of Principle Routes

The four measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Foil strain gauge | Contact (bonded) | Resistance change of the strain gauge | Strain converted from the bridge output and the gauge factor |
| 2. Fibre Bragg grating (FBG) | Contact (bonded or embedded) | Shift of the reflection centre wavelength | Strain converted from the wavelength shift |
| 3. Distributed fibre optic | Contact (bonded or embedded) | Scattered light along the fibre (Brillouin / Rayleigh) | Strain converted from the frequency shift or phase |
| 4. Optical digital image correlation (DIC) | Non-contact | Image displacement of the speckle pattern | Strain field converted from the displacement field |

**1. Foil strain gauge**

**Working principle:** A metal foil grid is bonded to the structure surface and stretches or contracts with the structural deformation, and its resistance changes accordingly; connected in a bridge, the output voltage is proportional to the surface strain.

**Typical magnitudes and limitations:** Can cover the order of thousands of microstrain (1 microstrain = 10⁻⁶ strain); the measurement point is a single point, and what is measured is the average strain over a gauge length.

**Advantages:** High accuracy, mature technology, low cost, can be directly matched to bridge acquisition systems.

**Limitations:** Requires waterproof and salt-spray treatment; heavy wiring workload; temperature compensation needs special handling.

**2. Fibre Bragg grating (FBG)**

**Working principle:** A periodic refractive-index modulation in the fibre reflects light of a specific wavelength back, and the reflected centre wavelength shifts with the strain applied to the grating; the strain is obtained from the wavelength shift (Kersey et al., 1997; Hill & Meltz, 1997).

**Typical magnitudes and limitations:** Microstrain-level resolution (limited by the wavelength resolution of the interrogator), with tens of measurement points in series on a single fibre; strain and temperature affect the wavelength simultaneously and must be separated (Hill & Meltz, 1997).

**Advantages:** Resistant to electromagnetic interference, corrosion-resistant, can be embedded inside composite materials to obtain internal strain rather than only surface strain.

**Limitations:** Requires an interrogator; cross-sensitivity between strain and temperature; high packaging-process requirements.

**3. Distributed fibre optic**

**Working principle:** Using optical time-domain reflectometry or coherent reflectometry (locating each section of the fibre by echo time or phase), the scattered signal along the fibre is read section by section, and the along-length strain distribution is obtained from the frequency shift or phase change (Hartog, 2017).

**Typical magnitudes and limitations:** Long-range Brillouin systems can cover tens of kilometres, with a spatial response usually at the metre level. Short-range high-density Rayleigh systems can provide denser measurement points: the minimum gauge pitch (the centre-to-centre spacing of adjacent measurement sections) of the Luna ODiSI 6000 is 0.65 mm, with a strain range of ±15 000 µε; the gauge pitch is not the same as the independent spatial resolution, and the actual capability is also affected by the gauge length and the system response (Luna Innovations, n.d.).

**Advantages:** Continuous measurement along the full length, passive, corrosion-resistant, suitable for long structures.

**Limitations:** The spatial response of long-range systems may be too coarse relative to the model scale; short-range high-density systems are limited by measurement length, update rate, and cost. The interrogation equipment and distributed data processing are also relatively complex.

**4. Optical digital image correlation (DIC)**

**Working principle:** A speckle pattern (random spots sprayed or transferred) is prepared on the specimen surface, images before and after deformation are recorded with a camera, the displacement field is obtained by a correlation algorithm, and the strain field is obtained by differentiation.

**Typical magnitudes and limitations:** Full-field measurement; the strain resolution and spatial resolution are jointly determined by the camera resolution and the size of the subset (the small region matched block by block in the correlation computation); for underwater use, water-surface refraction must be handled.

**Advantages:** Non-contact, full-field measurement, suitable for thin shells and composites.

**Limitations:** Requires preparation of a speckle pattern; refraction must be handled underwater; high computational demand.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Salt-water environment |
| --- | --- | --- | --- | --- |
| 1. Foil strain gauge | Applicable | Not evaluated | Not evaluated | Restricted |
| 2. Fibre Bragg grating (FBG) | Applicable | Applicable | Applicable | Applicable |
| 3. Distributed fibre optic | Restricted | Applicable | Applicable | Applicable |
| 4. Optical digital image correlation (DIC) | Applicable | Not evaluated | Not evaluated | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **strain measurement** is the "salt-water environment": the KHL main tank is fresh water, but potential isolation and corrosion protection in salt-water tanks and real sea conditions are problems specific to strain measurement.

**Route selection:** According to the four criteria of 2.7.1 (the number and distribution of measurement points, whether continuous along-length measurement is required, the structure material and surface conditions, and whether long-term survival is required), the choice among the principles is as follows.

The foil strain gauge is mature, low-cost, and accurate, but can measure only single points, requiring point-by-point bonding and waterproofing; the fibre Bragg grating can connect multiple measurement points in series on one fibre and can be embedded inside composite materials to obtain internal strain; the distributed fibre optic covers the whole structure in one pass, with a metre-level spatial resolution for long-range systems; digital image correlation gives full-field strain without wiring, but requires a speckle pattern and optical conditions. Temperature is a common disturbance to all strain measurements: foil strain gauges rely on a temperature-compensation gauge, and fibre types rely on a reference grating or dual-wavelength separation.

#### 2.7.3 Implementation Considerations for the Three Scenarios

**Tank test:** Strain measurement on metal models is dominated by foil strain gauges. Protection in salt-water tanks is the key, requiring complete coating and sealing, and the lead-wire junctions must be potential-isolated, otherwise electrochemical corrosion will disable the measurement points within days. The choice of the temperature-compensation gauge must match the measured material.

Composite models and thin-shell structures are better suited to fibre Bragg gratings or digital image correlation. Fibre Bragg gratings can be embedded inside the model to obtain internal strain rather than only surface strain, which foil strain gauges cannot do; for the principle and devices of fibre Bragg grating sensing see Kersey et al. (1997) and Hill and Meltz (1997).

Long-range distributed fibre-optic systems with metre-level spatial response are restricted at tank model scale; short-range high-density systems can be used for along-length strain measurement on models, with the gauge pitch, effective gauge length, and update rate jointly determining the resolvable variation (Luna Innovations, n.d.).

The total longitudinal load measurement of a segmented/hydroelastic model (a segmented model that simulates the hull total longitudinal stiffness with an elastic backbone) uses a backbone with strain gauges: the relationship between the backbone strain and the total load is determined by force and moment calibration before the test, and crosstalk is handled with a calibration matrix (ITTC 2024, 7.5-02-07-02.6, §2.5).

**Field sea trial:** Fibre Bragg gratings are convenient for arranging multi-point measurement on long structures, and their resistance to electromagnetic interference and corrosion is a significant advantage in the field environment. The drawback is that the interrogation equipment requires protection and power.

**Long-term monitoring:** In long-term structural monitoring, the distributed fibre optic is one of the principles capable of continuous measurement along the full structure length, and is passive, corrosion-resistant, and immune to electromagnetic interference, making it suitable for risers, pipes, cables, and submarine cables; for the principle and systems of distributed fibre-optic sensing see Hartog (2017), and for an example of fibre Bragg gratings used in fatigue-crack monitoring see Mieloszyk (2021). The cross-sensitivity between temperature and strain must be handled by a reference grating or a dual-wavelength method, otherwise temperature changes are misread as strain.

Distributed strain results referenced to an initial state depend on the stability of the reference. Before-and-after re-checks under a known zero-strain or reference state help distinguish reference drift from actual structural change; the initial strain introduced by installation and packaging must be interpreted against the corresponding reference conditions.

#### 2.7.4 Calibration and Uncertainty

Strain gauges are calibrated by determining the scale factor (the ratio of output to strain) from the bridge output under known strain. Shunt calibration (connecting a known resistor in parallel with one arm of the bridge to simulate strain) can check whether the bridge gain is consistent with the calibration value, but it verifies only the electrical chain and cannot prove that the mechanical load actually reached the strain gauge, so it cannot replace the overall calibration.

The wavelength-strain relationship of a fibre Bragg grating needs calibration, and the temperature coefficient must also be calibrated to separate the temperature effect; for handling the strain-temperature cross-sensitivity see Kersey et al. (1997) and Hill and Meltz (1997). Distributed fibre optics usually give relative strain, and an absolute reference requires an additional datum measurement.

Uncertainty components specific to strain and deformation measurement include: the installation process (adhesive-layer thickness, bonding quality, adhesive shear lag), the temperature-compensation residual, the resistance drift of leads and bridge, the correspondence between the actual structural strain field and the measurement-point position, and the averaging effect of the gauge length on spatial gradients. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

Fibre-type schemes have one additional transfer error: the strain-transfer efficiency between the fibre and the structure (the fraction of the structural strain transferred through the packaging layer to the fibre) depends on the packaging and bonding process; the calibration gives the strain-wavelength relationship of the fibre itself, while the actual strain on the structure surface must be converted through a transfer coefficient, which should be determined under the same process conditions as the real object. When inverting a global load from a small number of measurement points, the condition number of the inversion model (a measure of the degree to which measurement-point errors are amplified) and a sensitivity analysis of the measurement-point positions should be given.

#### 2.7.5 Common Errors

- Not potential-isolating strain gauges in a salt-water tank.
- A temperature-compensation gauge that does not match the measured material, causing the reading to drift with temperature.
- Not separating the strain and temperature effects of a fibre Bragg grating.
- Inverting a global load from a small number of measurement points without a sensitivity analysis.
- A strain-gauge orientation that deviates severely from the principal strain direction without stating it.

#### 2.7.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.7.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. Distributed-strain interrogation systems and optical full-field strain systems have no published price and require manufacturer quotation. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Foil strain gauge | BF350-3AA | 350 Ω, pack of 10 | Component | £8.39 | Amazon UK 2026-10-06 | Same model as in 2.2.6 |
| Bridge amplifier module | HX711 24-bit module | Dual channel | Component | £10.08 | Amazon UK 2026-10-06 | Component-level price reference only |
| Fibre Bragg grating interrogator | Beijing Naijiu Weiye FBG fibre grating interrogator (wireless version, temperature/strain bridge monitoring) | Wireless transmission, temperature and strain monitoring | Complete system | ¥52,000 | Taobao 2026-10-06 | Beijing, 7-year-old store; complete instrument with wireless transmission and monitoring software |
| Distributed-strain interrogation system | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |
| Optical full-field strain system | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |

Main supply channels: Micro-Measurements (Vishay), HBK, Kyowa, TML (strain gauges and bridge acquisition); Luna, Smart Fibres, Technobis, HBK (fibre Bragg gratings); Silixa, AP Sensing, OptaSense, Febus Optics (distributed fibre optics); GOM, Correlated Solutions (optical full-field strain). Channel websites are given in Appendix C.

### 2.8 Displacement and Gaps

#### 2.8.1 Measurement Target and Criteria

The objects of measurement are the relative displacement between points, the deformation of structures, and the gaps between moving components. Common applications are auxiliary measurement of model attitude, gap and rub-impact monitoring (a rub-impact being an event in which two components that should maintain a gap come into contact or friction), and structural deformation tracking.

These methods differ mainly in the following respects. First, the trade-off between range and accuracy: micrometre-level accuracy usually corresponds to millimetre-level range, while metre-level range usually only gives millimetre-level accuracy. Second, whether contact measurement is required — when the measurement point moves at high speed with the model, non-contact probes should be preferred, to avoid the interference of the probe and bracket with the measured motion (ITTC 2024, 7.5-02-07-02.1, §2.9). Third, whether the installation datum can remain stable. Displacement measurement is divided into two schemes by datum: **fixed datum** — the sensor is fixed to facility structures such as the carriage and tank wall, measuring the model's motion relative to the facility; **body-fixed datum (relative measurement)** — the two ends of the sensor are connected to the two measured points respectively, measuring the relative displacement between the two points, with the datum moving with the model. Datum drift appears directly as low-frequency spurious displacement, difficult to distinguish from real structural deformation; the body-fixed datum scheme also requires the calibration attitude to be consistent with the actual installation.

Derived quantities include: the amplitude and phase of relative motion, cumulative displacement, the minimum gap and rub-impact events, the along-length distribution of structural deformation, and the velocity and acceleration obtained from displacement. Among these, acceleration is sensitive to high-frequency noise, and the filtering method must be stated when it is obtained by differentiating displacement.

#### 2.8.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Laser triangulation displacement | Non-contact | Position of the light spot on the detector | Distance converted through the triangulation relationship |
| 2. Linear variable differential transformer (LVDT) | Contact | Differential voltage caused by the core displacement | Displacement converted through the calibration relationship of the differential voltage |
| 3. Draw-wire | Contact | Length of wire drawn out | Displacement converted from the draw-wire length or encoder output |
| 4. Laser scanning | Non-contact | Point cloud on the scanned surface | Geometry reconstructed from the point cloud |
| 5. Vision and photogrammetry | Non-contact | Image coordinates of markers or features | Three-dimensional coordinates converted through calibration |

**1. Laser triangulation displacement**

**Working principle:** A laser beam strikes the measured surface obliquely, and the position of the diffuse-reflected spot on the detector varies with distance, from which the displacement is converted through the triangulation relationship.

**Typical magnitudes and limitations:** Sampling rates up to the kHz level for capturing rapidly varying displacement; ranges from millimetres to metres and accuracy from micrometres to millimetres, varying with the model and working distance (Keyence, 2026). Requires an optical line of sight; refraction must be corrected in water; the surface reflection characteristics affect the result.

**Advantages:** High accuracy, fast response, flexible installation, non-contact.

**Limitations:** Requires a clear line-of-sight path; refraction must be corrected in water; transparent or highly reflective surfaces require handling.

**2. Linear variable differential transformer (LVDT)**

**Working principle:** The LVDT consists of one primary coil and two symmetrical secondary coils. As the core moves with the measuring rod, the coupling of one secondary coil strengthens while the other weakens; the two secondary coils are connected in series opposition (**differential connection**), and the output voltage is proportional to the difference of the coupling on the two sides, hence proportional to the core displacement. The differential connection stabilises the zero point: temperature and power-supply fluctuations affect the two sides equally and cancel on subtraction.

**Typical magnitudes and limitations:** Ranges from millimetres to hundreds of millimetres, micrometre-level resolution; requires a mechanical connection.

**Advantages:** High linearity, reliable, suitable for long-term deployment.

**Limitations:** Requires a mechanical connection, limited range.

**3. Draw-wire**

**Working principle:** A steel wire is wound on a drum with a constant-force coil spring, and the drawn-out length is given by the drum rotation angle.

**Typical magnitudes and limitations:** Metre-level range, millimetre-level accuracy; the dynamic response is limited by the spring and wire mass.

**Advantages:** Large range, easy installation.

**Limitations:** The wire tension imposes a considerable constraint force on small models; limited dynamic response.

**4. Laser scanning**

**Working principle:** A laser beam scans within the field of view, ranging point by point to obtain a point cloud on the scanned surface, and geometry is reconstructed from the point cloud.

**Typical magnitudes and limitations:** Full-field measurement, with range and resolution varying with the model; sub-millimetre resolution is achievable in air, while in water it is limited by refraction and turbidity.

**Advantages:** Can perform full-field measurement of terrain and attitude.

**Limitations:** Complex data processing; restricted in water.

**5. Vision and photogrammetry**

**Working principle:** The principle is given in Principle 5 of 2.5.2. When used for displacement and gap measurement, the relative displacement between two measurement points is obtained from the reconstructed three-dimensional coordinates.

**Typical magnitudes and limitations:** The range and accuracy depend on the calibration scheme, camera resolution, and field of view; sub-millimetre levels are achievable in the laboratory, degrading underwater with refraction and turbidity.

**Advantages:** Full-field measurement, with a few schemes not requiring markers on the measured object.

**Limitations:** Complex post-processing; limited by imaging conditions.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Dynamic conditions |
| --- | --- | --- | --- | --- |
| 1. Laser triangulation displacement | Applicable | Restricted | Restricted | Applicable |
| 2. Linear variable differential transformer (LVDT) | Applicable | Applicable | Applicable | Restricted |
| 3. Draw-wire | Applicable | Applicable | Applicable | Restricted |
| 4. Laser scanning | Applicable | Restricted | Restricted | Restricted |
| 5. Vision and photogrammetry | Applicable | Restricted | Restricted | Applicable |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the three criteria of 2.8.1 (the range-accuracy trade-off, whether contact measurement is required, and whether the installation datum can remain stable), the choice among the principles is as follows.

Laser triangulation displacement and laser scanning are non-contact measurements with high accuracy and fast response, at the cost of requiring line of sight and a stable installation datum, and refraction correction in water; the LVDT has high accuracy but requires a mechanical connection, and is suitable for measurement points with good rigidity; the draw-wire has the largest range and easy installation, but the wire tension imposes a constraint force on small models. Range and accuracy usually constrain each other: micrometre-level accuracy corresponds to millimetre-level range, and metre-level range generally only achieves millimetre-level accuracy. When the measurement point moves at high speed with the model, non-contact probes are preferred.

#### 2.8.3 Implementation Considerations for the Three Scenarios

**Tank test:** Laser displacement sensors are suitable for measuring the relative motion between the model and fixed structures, but the refractive index in water changes the optical path, so the calibration must be carried out in water. The reflection characteristics of the measured surface also affect the result, and transparent or highly reflective surfaces require handling.

Draw-wire displacement sensors have a large range and easy installation, but the wire tension imposes a considerable constraint force on small models, and this effect must be evaluated when the model mass is small. LVDTs have high accuracy but require a mechanical connection, and are suitable for measurement points with good rigidity.

The choice of installation datum is equally important: the fixed-datum scheme uses the fixed structure of the facility as the datum and has good stability; the datum of the body-fixed-datum scheme moves with the model, and the calibration must be completed in the same attitude (orientation and angle) as the actual installation, otherwise the orientation error of the sensor is superimposed on the measured displacement as a cosine error.

**Field sea trial:** Displacement and gap measurement is often used for rub-impact detection and cumulative deformation. The measurement points move with the structure, and a fixed facility datum is difficult to maintain over the long term, so contact methods or relative-displacement schemes using the measured structure as the installation datum can be used; datum drift appears in the data as low-frequency variation.

**Long-term monitoring:** The main limits of long-term deployment are fouling and wear. Optical schemes are severely affected by biofouling and turbidity, requiring window cleaning or shielding; contact schemes are more reliable, but the wear of sliding parts changes the calibration, so a detachable re-check structure should be retained. The alarm threshold of gap monitoring is determined by the allowable gap given by the structural design and the safety margin, not by the resolution of the sensor itself. The sensor provides only the measured value of the gap, and the alarm line must be determined separately from the gap the structure can tolerate.

#### 2.8.4 Calibration and Uncertainty

Displacement sensors are usually calibrated with standard gauge blocks, micrometers, or precision translation stages. Laser displacement sensors need calibration in the working medium at the working distance.

Uncertainty components specific to displacement and gap measurement include: the accuracy of the calibration device itself, the measured-surface characteristics (reflectivity, roughness, transparency), the stability of the installation datum, the structural dimensional changes caused by temperature, and the refraction-correction residual of the laser displacement sensor's optical path and the mounting-angle deviation of the sensor optical axis. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

The velocity and acceleration derived from displacement carry transfer errors: numerical differentiation of position amplifies high-frequency noise, and the test report should give the filtering method and cutoff frequency before differentiation, otherwise the same displacement data will give very different acceleration peaks.

#### 2.8.5 Common Errors

- Using a laser displacement sensor calibrated in air directly in water.
- Not evaluating the effect of the draw-wire sensor's wire tension on a small model.
- An unstable installation datum causing low-frequency drift to be mistaken for structural response.

#### 2.8.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.8.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The first two rows are handheld laser rangefinders, given only as price references for the range-accuracy correspondence; the photogrammetry systems are Taobao complete-instrument listings, with the software part further given in 2.15.6. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Laser ranging (handheld) | Enventor 50 m laser rangefinder | ±3 mm | Industrial component | £24.99 | Amazon UK 2026-10-06 | Only as a price reference for the range-accuracy correspondence |
| Laser ranging (handheld) | Leica DISTO X1 | IP65, Bluetooth | Industrial component | £135.96 | Amazon UK 2026-10-06 | — |
| Laser triangulation displacement sensor (industrial) | CMOS laser displacement sensor | 50/100/200/400 mm ranges selectable, NPN + analogue 0–10.5 V | Industrial component | £227.86 | Amazon UK 2026-10-06 | Triangulation type; this row takes the 200 mm analogue model |
| Draw-wire displacement sensor | Draw Wire Encoder 10–1200 mm | Same as 2.5.6 | Industrial component | £57.55 | Amazon UK 2026-10-06 | Same model as in 2.5.6 |
| Linear variable differential transformer | KPC35 spring-return displacement sensor | 50/100/130/150/175 mm ranges selectable | Industrial component | £69.75 | Amazon UK 2026-10-06 | — |
| Linear variable differential transformer | LVDTC20 | 4–20 mA output | Industrial component | £294.71 | Amazon UK 2026-10-06 | — |
| Laser scanner | RPLIDAR S2M1 | 360°, 30 m scan radius | Complete system | £368.72 | Amazon UK 2026-10-06 | Two-dimensional scanning type |
| Laser scanner | YDLIDAR X4 | 10 m, 5 kHz | Component | £89.99 | Amazon UK 2026-10-06 | Component-level, as a lower price bound |
| Photogrammetry system | Hexagon DPA wireless photogrammetry system | Industrial grade, with 3D scanner | Complete system | ¥19,800 | Taobao 2026-10-06 | 5-year-old store |
| Photogrammetry system | Industrial photogrammetry system, 3D optical measuring instrument | Industrial-grade 3D optical measurement | Complete system | ¥13,010 | Taobao 2026-10-06 | 5-year-old store |

Main supply channels: Keyence, Micro-Epsilon, Panasonic, Banner (laser displacement); HBK, RDP, Solartron (LVDT and draw-wire); SICK, Leica, Faro (laser scanning); GOM, Correlated Solutions (photogrammetry). Channel websites are given in Appendix C.

### 2.9 Torque and Rotational Speed

#### 2.9.1 Measurement Target and Criteria

The objects of measurement are the torque on a rotating shaft and the angular velocity, mainly used for the performance testing and drivetrain monitoring of marine energy device power take-offs, propellers, and turbines. Multiplying the two gives the shaft power; combined with thrust, advance speed, or input power, the propulsive efficiency and the capture efficiency (the fraction of input energy converted into usable power by the device) can be obtained. Other derived quantities include the RMS and peak of torque, the torsional-vibration frequency of the shaft, and the order components of the drivetrain.

These methods differ mainly in the following respects. First, the combination of the rotational-speed range and the torque range: the two jointly determine the power range, and an excessively large range sacrifices resolution. Second, whether the measurement is made directly on the rotating member or indirectly through the reaction torque. Third, whether torque and rotational speed are strictly synchronously sampled — power is the product of the two, and the channel time delay biases both the instantaneous and mean power, with the direction depending on the phase relationship of the signals. Fourth, whether long-term continuous recording is required, which determines the choice between a slip ring (leading the signal out of the rotating member through brushes and conductive rings) and telemetry (transmitting the signal back from the rotating member wirelessly).

Rotational speed and rudder angle should be recorded continuously in seakeeping tests (ITTC 2024, 7.5-02-07-02.1, §2.9); the additional measurements for extreme conditions such as propeller emergence (the propeller partially leaving the water) include propeller thrust, torque, and rotational speed, and the RMS and peak torque should be reported (ITTC 2024, 7.5-02-07-02.3, §2.4.3).

#### 2.9.2 Comparison of Principle Routes

The four measurement principles covered in this section are shown in the table below. The strain-gauge torque sensor is also used for the force and moment measurement of 2.2.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Strain-gauge torque sensor | Contact (inserted in the shaft line) | Torsional strain on the shaft | Torque converted through the calibration relationship of the shaft torsional strain |
| 2. Magnetoelastic | Non-contact | Change of the magnetic field near the shaft surface | Torque converted from the magnetic characteristic |
| 3. Reaction-torque method | Contact (measures the stator or support) | Reaction force and lever arm | Moment converted through the lever arm |
| 4. Photoelectric and magnetic encoder | Non-contact | Pulse count (angular position or angular velocity) | Rotational speed obtained from the pulse count or frequency |

**1. Strain-gauge torque sensor**

**Working principle:** Strain gauges are bonded to the drive shaft to form a bridge, and the bridge output is proportional to the torque when the shaft is twisted; the measurement does not depend on a reference point.

**Typical magnitudes and limitations:** Calibrated together with the matching dynamometer; open-water tests (hydrodynamic tests of a propeller alone in a uniform inflow) require thrust and torque to be measured to within 0.2% of the maximum range (i.e. the measurement error not exceeding 0.2% of the dynamometer full scale), with rotational speed also recorded according to the procedure (ITTC 2021, 7.5-02-03-02.1, §3.3.2, §3.3.3, §3.3.4); installation requires shaft alignment (the coaxiality of the shaft sections) and is relatively bulky.

**Advantages:** Can measure static and dynamic torque, stable output, can be directly matched to bridge acquisition systems.

**Limitations:** Requires alignment; relatively bulky; requires power and signal extraction (slip ring or telemetry).

**2. Magnetoelastic**

**Working principle:** The magnetic permeability of a ferromagnetic shaft changes under torsion, and the magnetic field near the shaft surface changes accordingly, with the torque converted from the change in the magnetic field.

**Typical magnitudes and limitations:** The accuracy is usually lower than the strain-gauge type, and the specific values must be checked model by model against the manufacturer's data sheet; temperature compensation is required. For the principle and implementation of non-contact torque measurement see the relevant literature (Beth & Meeks, 1954; Whitehead, 1999).

**Advantages:** Non-contact, no slip ring, robust structure.

**Limitations:** Lower accuracy; higher temperature-compensation requirements.

**3. Reaction-torque method**

**Working principle:** The reaction force on the stator or support is measured, and the torque is converted through a known lever arm.

**Typical magnitudes and limitations:** The overall accuracy is jointly determined by the lever-arm length and the force-measuring element, with the lever arm usually between 0.1 and 1 m; under dynamic conditions it is affected by inertia and friction losses.

**Advantages:** No need to install a sensor on the rotating member.

**Limitations:** Requires known inertia and friction losses; larger error under dynamic conditions.

**4. Photoelectric and magnetic encoder**

**Working principle:** A code disc or magnetic grating rotates with the shaft to produce a pulse train, and the angular position and angular velocity are obtained from the pulse count.

**Typical magnitudes and limitations:** The angular resolution depends on the number of pulses per revolution and the subdivision factor; an incremental encoder with subdivision can give resolution far better than 1°; it gives only angular position and angular velocity, not torque.

**Advantages:** High accuracy, reliable, can serve as a phase-reference quantity.

**Limitations:** Measures only rotational speed, not torque.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | High-speed rotation conditions |
| --- | --- | --- | --- | --- |
| 1. Strain-gauge torque sensor | Applicable | Applicable | Applicable | Applicable |
| 2. Magnetoelastic | Not evaluated | Not evaluated | Restricted | Applicable |
| 3. Reaction-torque method | Applicable | Not evaluated | Not evaluated | Restricted |
| 4. Photoelectric and magnetic encoder | Applicable | Not evaluated | Applicable | Applicable |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable.

**Route selection:** According to the four criteria of 2.9.1 (the rotational-speed range and torque range, direct measurement or reaction torque, whether torque and speed are synchronised, and whether long-term continuous recording is required), the choice among the principles is as follows.

The strain-gauge torque sensor is inserted in the shaft line and can measure static and dynamic torque, but requires power and signal extraction: a slip ring introduces noise and wear, while telemetry avoids mechanical contact but still requires solving rotor power supply and wireless transmission; the magnetoelastic type is non-contact and slip-ring-free, with accuracy varying with the shaft material, magnetisation state, and calibration; the reaction-torque method indirectly obtains torque by measuring the reaction force on the stator or support, which is feasible in steady state but is affected by inertia and friction under dynamic conditions. Rotational speed is usually given by a photoelectric or magnetic encoder, with resolution depending on the number of pulses per revolution. Power is the product of torque and rotational speed, and the time delay between the two signals biases both the instantaneous and mean power.

#### 2.9.3 Implementation Considerations for the Three Scenarios

**Tank test:** When an on-shaft sensor is used to measure power take-off torque, the sensor is installed in the rotating shaft line, involving a slip-ring or telemetry scheme. A slip ring introduces noise and wear, while a telemetry scheme avoids mechanical contact but still requires solving rotor power supply and wireless transmission. Propeller thrust and torque are measured separately with an open-water dynamometer, and **both thrust and torque should be measured to within 0.2% of the maximum range; the key to torque measurement is to minimise the shaft friction loss** (ITTC 2021, 7.5-02-03-02.1, §3.3.2 and §3.6).

Alignment error produces a periodic error component whose frequency is related to the rotational speed, appearing in spectral analysis as integer multiples of the rotational frequency and easily mistaken for real torque pulsation. Alignment and concentricity checks must be performed at installation.

The reaction-torque method is common on small-scale models, obtaining torque indirectly by measuring the reaction force on the stator or support. This method is feasible in steady state, but is significantly affected by inertia and friction under dynamic conditions and needs separate evaluation.

In open-water tests, thrust, torque, and rotational speed are recorded simultaneously by the same dynamometer, and the time alignment of the three is the premise of power and efficiency calculation. The signal chains of the three channels are not the same — torque goes through the strain bridge and slip ring or telemetry, and rotational speed goes through pulse counting, with different delays too — and the test report should give the sampling rate of each channel and whether a time-delay correction was made (ITTC 2021, 7.5-02-03-02.1, §3.6). The bollard-pull test (measuring static thrust with the model moored) gives the thrust level at low speed and can serve as a check condition for the thrust and torque measurement chain (ITTC 2021, 7.5-02-03-01.1); the thrust and torque measurement of podded propulsors has separate test and conversion procedures (ITTC 2021, 7.5-02-03-01.3).

**Field sea trial:** Field installation is usually completed once during the docking period, and once the sensor is installed in the shaft line it is difficult to remove and recalibrate, so long-term field records are affected by long-term stability and zero-point drift in addition to the factory accuracy.

**Long-term monitoring:** In drivetrain monitoring, rotational speed is the phase-reference quantity, and the joint analysis of torque and rotational speed can separate order components. The effect of temperature change on the magnetoelastic sensor must be handled in long-term deployment. Long-term records should also retain sufficient rotational-speed resolution: order analysis (spectral analysis that uses rotational speed as the reference and converts the spectrum to rotational orders) depends on the angular reference, and the error of the rotational-speed estimate directly broadens the spectral peaks of the order spectrum.

#### 2.9.4 Calibration and Uncertainty

Torque sensors can be calibrated with a standard torque wrench or a lever with weights, and the alignment and bearing friction in the actual installation affect the result. Instrument calibration and test-data correction are different stages: the data processing of open-water tests also involves propeller-hub cap-effect correction, and cavitation-tunnel tests further involve wall-effect correction (ITTC 2021, 7.5-02-03-02.1, §3.4.2.2, §3.6).

Uncertainty components specific to torque and rotational-speed measurement include: alignment and concentricity errors (which produce periodic components at integer multiples of the rotational frequency in the spectrum), bearing friction loss, the effect of temperature on the zero point and sensitivity, the noise of the slip-ring or telemetry chain, and the time delay between the torque and rotational-speed channels. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

There is also a condition-dependent component: under dynamic conditions, the torsional vibration of the shaft line superimposes a periodic fluctuation (AC component) on the mean torque reading, while calibration is usually completed under static or quasi-static conditions, and the difference between the two should be assessed by a separate in-situ check. When the two signals have different sampling rates, the resampling method should be stated; order analysis requires the rotational-speed signal to have sufficient angular resolution, otherwise the order spectrum is broadened by the rotational-speed estimation error.

#### 2.9.5 Common Errors

- Not sampling torque and rotational speed synchronously, causing bias in the power estimate.
- Mistaking the rotational-frequency components of alignment error for real pulsation.
- Using the reaction-torque method under strongly dynamic conditions without evaluating the inertia effect.
- Treating noise caused by slip-ring wear as signal.
- Multiplying the torque and rotational-speed channels directly to obtain power without time-delay correction.
- Using the factory calibration value instead of the calibration under the actual installed state.
- Recording only thrust without rotational speed, so the thrust coefficient cannot be related to rotational speed.

#### 2.9.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.9.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The torque sensors in the table cover industrial general-purpose components and Taobao complete-instrument listings, and are not on the same tier as the laboratory-grade complete instruments of HBK and Kistler, which are quoted by range, accuracy, and rotational-speed limit. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Strain-gauge torque sensor | DAYSENSOR static strain-gauge torque sensor | 50 N·m, for torque-wrench calibration | Industrial component | £145.99 | Amazon UK 2026-10-06 | — |
| Strain-gauge torque sensor | Static Torque Sensor, flange type | 2/50/150 N·m selectable | Industrial component | £143.58 | Amazon UK 2026-10-06 | — |
| Strain-gauge torque sensor | BFN-206 rotary strain-gauge torque sensor | 0–1000 N·m | Industrial component | £2,148.17 | Amazon UK 2026-10-06 | Highest range in this table |
| Wireless telemetry torque system | 10 N·m Rotary Torque Sensor Set | External OLED display, speed and power measurement | Complete system | £659.99 | Amazon UK 2026-10-06 | Non-contact rotary type |
| Wireless telemetry torque system | NJ5101-200 non-contact rotary torque sensor | 200 N·m, RS485 | Complete system | £1,503.55 | Amazon UK 2026-10-06 | — |
| Slip ring | 12-wire cap slip ring | 240 V, 2 A, 250 rpm | Component | £13.99 | Amazon UK 2026-10-06 | Component-level |
| Slip ring | Taidacent 12-wire slip ring | 5 A | Component | £53.63 | Amazon UK 2026-10-06 | — |
| Rotational-speed measurement (component-level) | Hall / photoelectric encoder module | Incremental | Component | £10 to £30 | Amazon UK 2026-10-06 | Range from an Amazon UK search on 2026-10-06 |
| Torque sensor and accessories | Rotary dynamic torque sensor (with power meter and torque display) | With display | Complete system | ¥4,564 | Taobao 2026-10-06 | Hongruifu Flagship Store |
| Torque sensor and accessories | Dynamic torque-speed-power torque sensor | Strain-gauge type, factory direct | Industrial component | ¥12,568 | Taobao 2026-10-06 | Laboratory-grade direction |

Main supply channels: HBK, Kistler, Futek, Lorenz (torque measurement); Heidenhain, Baumer, Kübler (encoders); Michigan Scientific (telemetry torque). Channel websites are given in Appendix C.

### 2.10 Temperature

#### 2.10.1 Measurement Target and Criteria

The objects of measurement include water temperature, model surface temperature, structural wall temperature, and temperature stratification. The applications are conductivity and sound-speed compensation, thermal-stress analysis, and the interpretation of water-quality and ecological parameters. Temperature, together with salinity and pressure, determines the density and sound speed of water, and the variation of the physical properties of fresh water and seawater with temperature is given in the ITTC physical-properties procedure (ITTC 2024, 7.5-02-01-03).

These methods differ mainly in the following respects. First, the trade-off between accuracy and response time: water-temperature measurement changes slowly and is used for physical-property conversion, so absolute accuracy matters more than response speed; wall-temperature and heat-flux measurement changes quickly, so response speed is more critical. Second, the representativeness of the measurement point: a single-point water temperature is not equal to the whole-tank water temperature, and when stratification is significant, multiple points are needed, or at least one point each in the upper and lower layers. Third, the interface with other quantities: water temperature is the input of sound-speed compensation and resistive wave-probe calibration, so water temperature is related to 2.1.4 and 2.11.

Quantities derived from temperature include: water density, viscosity, sound speed, and conductivity, thermal stress and heat flux, and stratification gradient. These physical-property parameters enter the correction stages of other sections, and the uncertainty of water temperature therefore propagates indirectly into the comparison of wave, flow-velocity, and acoustic quantities.

#### 2.10.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Platinum resistance | Contact | Change of platinum resistance with temperature | Converted through the resistance-temperature relationship of platinum |
| 2. Thermocouple | Contact | Thermoelectromotive force between the hot and cold junctions | Temperature converted from the EMF after cold-junction compensation |
| 3. Thermistor | Contact | Change of semiconductor resistance with temperature | Nonlinear conversion through a calibration curve |
| 4. Infrared and optical | Non-contact | Radiant energy of the surface | Converted from radiation and emissivity |
| 5. Distributed temperature sensing | Contact (fibre) | Scattered light along the fibre (Raman / Brillouin) | Converted from frequency shift or light-intensity ratio |

**1. Platinum resistance**

**Working principle:** The resistance of a platinum wire increases approximately linearly with temperature; after eliminating the lead resistance with a four-wire connection (two leads supplying current and the other two measuring voltage, so that lead resistance does not affect the measurement result), the temperature is obtained from the resistance.

**Typical magnitudes and limitations:** Graded according to the International Electrotechnical Commission (IEC) 60751, with a tolerance (the allowable range of indicated-value deviation) of ±0.10 °C for Class AA at 0 °C and ±0.15 °C for Class A; a four-wire connection eliminates the lead-resistance error (IEC, n.d.). Relatively large, and the self-heating effect (the indicated-value offset caused by the measuring current heating the element) requires compensation.

**Advantages:** Good linearity, stable, lead error eliminable by four-wire connection.

**Limitations:** Relatively large; self-heating effect requires compensation.

**2. Thermocouple**

**Working principle:** A thermoelectromotive force is produced between the junctions of two different metals, whose magnitude depends on the temperature difference between the hot and cold junctions; the temperature at the measurement point can be converted only if the cold-junction temperature is known.

**Typical magnitudes and limitations:** Graded according to IEC 60584, with a tolerance of ±1.5 °C for a Class 1 K-type thermocouple in the range −40 to +375 °C; fine-wire thermocouples can respond at the millisecond level (IEC, n.d.).

**Advantages:** Fast response, small size, wide range.

**Limitations:** Lower accuracy; cold-junction compensation is mandatory.

**3. Thermistor**

**Working principle:** The resistance of a semiconductor oxide varies significantly with temperature, and the temperature is converted from the resistance through a calibration curve.

**Typical magnitudes and limitations:** High sensitivity but marked nonlinearity, with the applicable temperature range and achievable accuracy depending on the specific device and calibration curve (TDK, n.d.).

**Advantages:** High sensitivity, low cost.

**Limitations:** Marked nonlinearity, placing high demands on the conversion relationship and calibration curve.

**4. Infrared and optical**

**Working principle:** The infrared radiant energy emitted by the measured surface is detected, and the surface temperature is converted from the radiant energy and the emissivity.

**Typical magnitudes and limitations:** The accuracy depends on the calibration and the measured-surface emissivity, with non-contact temperature measurement typically at the ±1 °C level; in water it is limited by medium absorption.

**Advantages:** Non-contact, full-field measurement possible.

**Limitations:** Depends on emissivity; restricted in water.

**5. Distributed temperature sensing**

**Working principle:** Using optical time-domain or coherent reflectometry, the temperature-dependent scattered signal along the fibre is read to obtain the along-length temperature distribution.

**Typical magnitudes and limitations:** Long-range distributed temperature measurement has metre-level spatial resolution and a relatively slow response; short-range high-density systems can reach sub-millimetre spatial resolution but with a short measurement distance (see 2.17).

**Advantages:** Continuous long-distance measurement, suitable for the temperature-field monitoring of pipelines and the seabed.

**Limitations:** Coarse spatial resolution; slow response.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Stratification and solar-irradiation conditions |
| --- | --- | --- | --- | --- |
| 1. Platinum resistance | Applicable | Applicable | Applicable | Restricted |
| 2. Thermocouple | Applicable | Applicable | Not evaluated | Restricted |
| 3. Thermistor | Applicable | Not evaluated | Not evaluated | Restricted |
| 4. Infrared and optical | Applicable | Not evaluated | Not evaluated | Restricted |
| 5. Distributed temperature sensing | Not evaluated | Not evaluated | Applicable | Applicable |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **temperature measurement** is the "stratification and solar-irradiation condition": a single-point temperature cannot represent the whole water body when stratified or when the near-surface layer is under solar irradiation, and this is a problem specific to temperature measurement.

**Route selection:** According to the three criteria of 2.10.1 (the accuracy-response-time trade-off, measurement-point representativeness, and the interface with other quantities), the choice among the principles is as follows.

The platinum resistance can reach a small tolerance (±0.10 °C for Class AA at 0 °C), has good stability, and is suitable for water-temperature and physical-property compensation, at the cost of larger size and the need for self-heating compensation; the tolerance of the thermocouple is about an order of magnitude larger (±1.5 °C for Class 1 K-type), but it responds quickly and is small, suitable for wall and rapidly varying measurement; the thermistor has high sensitivity and marked nonlinearity, with the applicable temperature range varying with the device and calibration curve; the infrared and optical type is non-contact and depends on emissivity calibration; distributed temperature measurement gives the along-length distribution in one pass, but with metre-level spatial resolution and a relatively slow response. Measurement-point representativeness is a problem specific to water-temperature measurement: when stratified or when the near-surface layer is under solar irradiation, a single-point temperature cannot represent the whole water body.

#### 2.10.3 Implementation Considerations for the Three Scenarios

**Tank test:** Water-temperature measurement is mainly used for conductivity and sound-speed compensation. Single-point accuracy and water-body representativeness jointly affect the compensation result; the temperature at the wavemaker, the pump outlet, and solar-irradiated regions may differ from the whole water body.

The temperature stratification of tank water in a deep tank is more significant than expected, and using a single-point temperature for the sound-speed compensation of the whole tank introduces a systematic error. Multiple-point measurement, or at least one point each in the upper and lower layers, is the more prudent practice. The variation of the density, viscosity, and sound speed of fresh water and seawater with temperature and salinity is given in the ITTC physical-properties procedure (ITTC 2024, 7.5-02-01-03).

When the water temperature is approximately stable during the test, one measurement before and one after can be used to check the change of the sound-speed-compensation condition; when studying the thermal structure of the water body, continuous recording synchronised with waves and flow velocity is usually used.

**Field sea trial:** Temperature is a basic hydrological parameter alongside salinity and pressure, usually measured together by a CTD (conductivity-temperature-depth, a synchronised profile measurement of temperature, conductivity, and depth) instrument. The time constant of the sensor needs to match the time scale of the measured phenomenon, and the effect of response lag cannot be ignored in fast-lowering profile measurement.

**Long-term monitoring:** Long-term temperature monitoring is dominated by self-contained recorders and distributed temperature sensing. Distributed temperature sensing is suitable for submarine-pipeline leak, seepage, and seabed temperature-field monitoring, and is the workhorse technology in this direction.

Long-term deployment must also consider the effect of biofouling on the temperature probe: the electrodes of the conductivity cell (a probe that measures water conductivity with electrodes) shared with the temperature probe are particularly prone to fouling, while fouling has a smaller effect on the temperature channel itself but changes its time constant, so the maintenance period is usually determined by the conductivity channel rather than the temperature channel.

#### 2.10.4 Calibration and Uncertainty

Temperature calibration uses the ice point, boiling point, or a standard thermostatic bath, together with a reference thermometer for comparison. The four-wire connection of a platinum resistance eliminates the effect of lead resistance, while the error of a two-wire connection is not negligible under long-cable conditions.

Uncertainty components specific to temperature measurement include: the uncertainty of the reference thermometer, the self-heating effect, the dynamic error caused by insufficient response time, the measurement-point representativeness problem, and lead resistance and contact resistance. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01); calibration and traceability can be performed according to ISO/IEC 17025.

Both self-heating and response time are affected by the probe structure and excitation conditions: increasing the excitation current raises the signal strength but also aggravates self-heating; reducing the probe volume usually speeds up the response while changing the heat-dissipation conditions. The differences in excitation, medium, and flow conditions between calibration and use affect the self-heating correction.

#### 2.10.5 Common Errors

- Using a single-point water temperature to represent the whole tank.
- Using a two-wire platinum resistance for long-cable measurement.
- Not performing cold-junction compensation on the thermocouple.
- Not comparing the response time of the temperature sensor with the time scale of the measured phenomenon.
- Ignoring the effect of solar irradiation on the near-surface water temperature.

#### 2.10.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.10.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The CTD and distributed-temperature interrogation systems are Taobao complete-instrument listings, among which the distributed-temperature interrogator is the same model as in 2.17.6. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Platinum resistance temperature sensor | PerfectPrime TL4050 | Four-wire Class A PT100, −50 to 200 °C, 2 m lead | Component | £18.99 | Amazon UK 2026-10-06 | — |
| Platinum resistance temperature sensor | PT100 integrated transmitter | 24 V supply, 4–20 mA, 0–100 °C, 1 m probe | Industrial component | £11.85 | Amazon UK 2026-10-06 | With transmitter |
| Thermocouple | K-type thermocouple probe, pack of 2 | −50 to 400 °C, 4 m lead, miniature plug | Component | £7.99 | Amazon UK 2026-10-06 | — |
| Thermocouple | K-type thermocouple, pack of 5 | −50 to 350 °C, 3 m lead | Component | £13.99 | Amazon UK 2026-10-06 | — |
| Temperature acquisition module | Pico Technology TC-08 | 8-channel thermocouple acquisition, USB powered | Laboratory grade | £418.80 | Amazon UK 2026-10-06 | The only laboratory-grade acquisition front end in this table |
| Temperature acquisition module | Tzone K-type thermocouple data logger | USB interface | Industrial component | £160.99 | Amazon UK 2026-10-06 | — |
| CTD and multi-layer temperature profile | Valeport SWiFT CTD sensor | Self-contained, CTD profile | Complete system | ¥20,500 | Taobao 2026-10-06 | Dual use for self-contained and profile measurement, same model as in 2.11.6 |
| Distributed-temperature interrogation system | Beijing Naijiu Weiye DAS/DTS distributed fibre-optic interrogator | Distributed fibre-optic interrogation | Complete system | ¥49,999 | Taobao 2026-10-06 | Beijing, 7-year-old store; same model as in 2.17.6 |

Main supply channels: Campbell Scientific, Omega, Labfacility (temperature sensors and acquisition); Sea-Bird Scientific, RBR, Aanderaa, Valeport (hydrological temperature and CTD); Silixa, AP Sensing (distributed temperature). Channel websites are given in Appendix C.

### 2.11 Hydrology and Water Quality

#### 2.11.1 Measurement Target and Criteria

The objects of measurement include conductivity, salinity, density, dissolved oxygen, turbidity and suspended-sediment concentration, chlorophyll, and pH and carbon-dioxide partial pressure. In tank tests, the main quantities used are conductivity (for sound-speed and fluid-property correction) and turbidity (for sediment-transport research). The conversion relationships among conductivity, salinity, density, and sound speed follow the physical-properties procedures for fresh water and seawater (ITTC 2024, 7.5-02-01-03).

These methods differ mainly in the following respects. First, whether the accuracy serves a specific correction or interpretation purpose: if only for sound-speed compensation, the conductivity accuracy requirement is much lower than for water-body-structure analysis. Second, whether a profile is required — the surface and bottom layers may differ, with CTD equipment chosen when a profile is needed and a single-parameter probe when only a single point is needed. Third, the maintainability of long-term deployment: this determines whether optical fluorescence types can be chosen, or whether electrochemical types requiring frequent calibration must be chosen.

Derived from these quantities are: salinity and density, sound speed, suspended-sediment concentration and sediment transport rate, water-body eutrophication, and dissolved-oxygen state. The most commonly used in tank tests are conductivity and turbidity, serving physical-property and sound-speed correction, and sediment transport respectively.

#### 2.11.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Conductivity and salinity | Contact (conductivity cell) | Conductivity of the water body | Salinity converted from conductivity and temperature |
| 2. Dissolved oxygen | Contact (optical fluorescence) | Fluorescence quenching time | Concentration converted from the quenching time |
| 3. Turbidity and suspended matter | Contact (optical scattering) | Scattered light intensity | Turbidity or concentration converted from the scattered light intensity |
| 4. Chlorophyll | Contact (optical fluorescence) | Fluorescence intensity | Chlorophyll concentration converted from the fluorescence intensity |
| 5. pH and carbon dioxide | Contact (electrochemical or optical) | Electrode potential or indicator response | Converted from the potential or response |

**1. Conductivity and salinity**

**Working principle:** The conductivity cell applies an alternating voltage between the electrodes and measures the conductivity of the water body; combined with temperature measurement, salinity and density are converted through the physical-property relationships.

**Typical magnitudes and limitations:** A self-contained CTD recorder can reach a conductivity accuracy of ±0.0003 S/m (resolution 0.00001 S/m) and a temperature accuracy of ±0.002 °C (Sea-Bird Scientific, 2026); another type of instrument has an initial conductivity accuracy of ±0.003 mS/cm and an annual stability of ±0.010 mS/cm (RBR, 2026). Requires temperature compensation, and the electrodes are prone to fouling.

**Advantages:** Mature, fast response, long-term self-contained recording, the basic quantity for sound-speed compensation.

**Limitations:** Requires temperature compensation; electrodes prone to fouling, antifouling needed for long-term deployment.

**2. Dissolved oxygen**

**Working principle:** Oxygen molecules quench the luminescence of a fluorescent dye, and the dissolved-oxygen concentration is converted from the fluorescence lifetime or intensity.

**Typical magnitudes and limitations:** The optical fluorescence method responds quickly and has relatively good long-term stability; the reading is affected by flow velocity and biofouling and requires calibration to field conditions.

**Advantages:** High maintenance-free degree, long-term stability, fast response.

**Limitations:** Requires calibration to field conditions; biofouling changes the response.

**3. Turbidity and suspended matter**

**Working principle:** A light beam illuminates the water body, the scattered light intensity at a certain angle is measured and converted to turbidity; the concentration is obtained by a second calibration against the actual sediment.

**Typical magnitudes and limitations:** Fast response, high-frequency recording possible; the reading must be secondarily calibrated to the actual sediment type, different particle sizes and colours of sediment give different coefficients, and bubbles are the main interference source.

**Advantages:** Fast response, high-frequency recording possible, suitable for scour and transport tests.

**Limitations:** Requires calibration to the sediment type; bubbles are the main interference source.

**4. Chlorophyll**

**Working principle:** Chlorophyll fluoresces after excitation, and the chlorophyll concentration is converted from the fluorescence intensity.

**Typical magnitudes and limitations:** Self-contained, suitable for long-term recording; requires biological calibration, and the reading is related to the algal species and physiological state.

**Advantages:** Long-term deployment possible, suitable for underway and fixed-point observation.

**Limitations:** Requires biological calibration; marked species dependence.

**5. pH and carbon dioxide**

**Working principle:** A glass electrode or optical indicator responds to hydrogen-ion activity, and the carbon-dioxide partial pressure is given by the corresponding sensitive element.

**Typical magnitudes and limitations:** Directly reflects the chemical state of the water body; large long-term drift, requiring more frequent calibration and maintenance.

**Advantages:** Can continuously monitor the trend of the chemical-state change.

**Limitations:** Long-term drift; frequent maintenance and calibration.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Salt-fresh-water transition conditions |
| --- | --- | --- | --- | --- |
| 1. Conductivity and salinity | Applicable | Applicable | Applicable | Applicable |
| 2. Dissolved oxygen | Applicable | Applicable | Applicable | Not evaluated |
| 3. Turbidity and suspended matter | Applicable | Applicable | Not evaluated | Restricted |
| 4. Chlorophyll | Not evaluated | Applicable | Applicable | Not evaluated |
| 5. pH and carbon dioxide | Not evaluated | Applicable | Restricted | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **hydrology and water-quality measurement** is the "salt-fresh-water transition condition": tank tests use fresh water, while field sea trials and long-term monitoring use seawater, and the calibration and compensation of the same instrument cannot be directly carried over between the two.

**Route selection:** According to the three criteria of 2.11.1 (whether the accuracy serves a specific correction purpose, whether a profile is required, and the maintainability of long-term deployment), the choice among the principles is as follows.

Conductivity is measured directly by the conductivity cell, and salinity and density are converted from conductivity and temperature; dissolved oxygen, chlorophyll, and turbidity are all optical quantities converted through calibration, with the reading depending on the actual medium — turbidity especially: the calibration must be redone after changing the sediment type. pH and carbon dioxide directly reflect the chemical state, but have large long-term drift and frequent maintenance. Long-term deployment must also consider antifouling capability: optical fluorescence types can maintain a longer maintenance-free period under antifouling design, while electrochemical types usually require more frequent maintenance. CTD equipment is chosen when a profile is needed, and a single-parameter probe for single-point measurement.

#### 2.11.3 Implementation Considerations for the Three Scenarios

**Tank test:** Conductivity measurement is used to determine the salinity of the water, and thereby to correct the sound speed and the calibration coefficients of resistive wave probes (cross-referenced with 2.1.4: conductivity is the input of wave-probe calibration). The conductivity in a salt-water tank varies with evaporation and refilling, and one measurement before and one after the test is the minimum requirement.

Turbidity measurement is used for sediment-transport and scour tests. Optical turbidimeters need calibration to the actual sediment type, and different particle sizes and colours of sediment give different calibration coefficients. Bubbles are the main interference source of turbidity measurement, requiring special attention downstream of the wavemaker and in breaking-wave regions.

When the water temperature and salinity are approximately stable during the test, one measurement before and one after can be used to check the change of the physical-property correction conditions; when studying salt-water wedges, mixing, or scour processes, continuous recording synchronised with flow velocity and wave surface is usually used, and the probe response time must also cover the process variation of interest.

**Field sea trial:** The CTD profile is the basis of field measurement. Self-contained recorders and shipborne profiling equipment are respectively suitable for long-term fixed-point and spatial-profile needs. In shipborne profiling, the sensor time constant and the lowering speed jointly determine the vertical resolution of the profile: the faster the lowering, the larger the lag, and the measured contours are flattened.

Salt-fresh-water transition regions (estuaries, lagoons, and coastal intake points) require special handling: the conductivity-salinity relationship varies with the water composition, and a uniform conversion relationship introduces a systematic bias; cross-checking with alkalinity or density measurement should be used when necessary.

**Long-term monitoring:** Biofouling and calibration drift affect long-term water-quality records. Optical fluorescence types can maintain a longer maintenance-free period under antifouling design, while electrochemical types usually require more frequent maintenance. After recovery, re-checking in standard solutions or reference conditions consistent with those before deployment, and comparing the change of the indication or calibration coefficients, helps distinguish instrument drift from real water-body change, and thus evaluate the maintenance period.

#### 2.11.4 Calibration and Uncertainty

Conductivity is calibrated with standard seawater or standard potassium-chloride solution; the conversion of salinity and density follows the ITTC physical-properties procedure (ITTC 2024, 7.5-02-01-03). Optical turbidity is calibrated with standard turbidity solutions, but a second calibration against the actual sediment is also required for sediment-concentration conversion.

Uncertainty components specific to hydrological and water-quality measurement include: biofouling and surface contamination, mismatch between the calibration substance and the actual medium, bubble and particle interference, temperature-compensation residual, the change of the cell constant with electrode ageing, and long-term drift. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01); calibration and traceability can be performed according to ISO/IEC 17025.

The conversion between turbidity and suspended-sediment concentration has an additional method error: the slope and intercept of the calibration curve both depend on the sediment particle-size distribution, and the same instrument often needs recalibration between different test sections; the test report should give the calibration coefficients of each section rather than only one set of general values (Williamson & Crawford, 2011). When used for sediment-concentration conversion, it should also be stated whether the reported concentration is volumetric or mass concentration.

#### 2.11.5 Common Errors

- Using general turbidity calibration coefficients to convert actual sediment concentration.
- Not tracking the conductivity change of a salt-water tank, causing sound-speed-compensation bias.
- Counting bubbles as turbidity.
- Not arranging maintenance and recalibration in long-term deployment.

#### 2.11.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.11.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The dissolved-oxygen, turbidity, and pH entries are portable meters or component-level probes; the CTD recorder and chlorophyll sensor are Taobao complete-instrument listings. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Self-contained CTD recorder | Valeport SWiFT CTD sensor | Self-contained, CTD profile | Complete system | ¥20,500 | Taobao 2026-10-06 | Same model as in 2.10.6 |
| Dissolved-oxygen sensor | Portable dissolved-oxygen meter (with automatic temperature compensation) | Digital display | Industrial component | £85.99 | Amazon UK 2026-10-06 | — |
| Dissolved-oxygen sensor | Milwaukee MW600 | 0.0–19.0 mg/L, two-point manual calibration | Laboratory grade | £274.99 | Amazon UK 2026-10-06 | Polarographic membrane probe, not the optical fluorescence method above (Milwaukee Instruments, n.d.) |
| Turbidity and suspended-sediment sensor | Online turbidity / suspended-solids sensor | Industrial online, sludge-concentration detection type | Industrial component | £110.99 | Amazon UK 2026-10-06 | Online type |
| Turbidity and suspended-sediment sensor | Gravity Analog Turbidity Sensor | Analogue output | Component | £22.92 | Amazon UK 2026-10-06 | Component-level, as a lower price bound |
| Chlorophyll and fluorescence sensor | Online digital water-quality chlorophyll / blue-green-algae sensor | Electrode probe, with measurement controller | Complete system | ¥450 | Taobao 2026-10-06 | Zhengzhou, Henan, Yuzhong Water-Quality Sensor Equipment manufacturer store, etc.; the ¥26 and ¥12.35 on the same page do not represent the complete-instrument price of this row |
| pH and carbon-dioxide probe | pH electrode (BNC interface) | 0–14, 75 cm cable | Component | £13.00 | Amazon UK 2026-10-06 | Electrode only, without meter |
| pH and carbon-dioxide probe | Portable pH meter | Handheld, with temperature display | Industrial component | £14.44 | Amazon UK 2026-10-06 | — |
| pH and carbon-dioxide probe | PXS-CO2 benchtop dissolved-carbon-dioxide analyser | LCD display | Laboratory grade | £1,963.27 | Amazon UK 2026-10-06 | Complete CO₂ analyser |

Main supply channels: Sea-Bird Scientific, RBR, Valeport, Aanderaa (basic hydrological parameters); WET Labs, Seapoint, Turner Designs (optical water quality); Campbell Scientific (acquisition and recording). Channel websites are given in Appendix C.

### 2.12 Meteorology and Wind

#### 2.12.1 Measurement Target and Criteria

The objects of measurement include wind speed and direction, three-dimensional wind and turbulence, and the wind profile (the distribution of mean wind speed with height). In tank tests, the effect of wind appears in floating-wind-turbine model tests: the wind load affects platform motion through the aerodynamic thrust, and here the wind measurement serves thrust calibration and similarity judgement. The wind-field generation, wind-speed profile, and turbulence-level requirements of laboratory wind generation are given in the ITTC wind-generation procedure (ITTC 2024, 7.5-02-07-01.5). Quantities derived from wind measurement include: mean wind speed and direction, turbulence intensity and turbulence spectrum, the wind profile (described by a shear exponent), the gust factor (the ratio of the gust peak to the mean wind speed), and the joint-distribution parameters of wind and waves.

These methods differ mainly in the following respects. First, whether turbulence information is required: mean wind speed and direction can be measured by mechanical or ultrasonic types, while turbulence statistics and wind profiles require higher response speed or remote sensing. Second, whether the measurement point falls in the wake of the platform, hull, or model itself — the wind speed in the wake region is not equal to the inflow, and the measurement-point position directly determines whether the data represent the inflow condition. Third, whether an equivalent-thrust device or a real fan is used in the model test: an equivalent-thrust device does not measure wind but must have its thrust calibrated, while a real fan requires measuring the inflow wind speed and turbulence level, with different requirements on the measurement chain.

Wind measurement also requires two parameters to be agreed in advance: the reference height and the averaging time. Wind speed varies with height, and 10 m is the reference height commonly used in wind engineering, being 10 m above the mean still-water level (full scale) (ITTC 2024, 7.5-02-07-01.5); gust and turbulence statistics vary with the averaging duration, and 1-minute, 10-minute, and 1-hour averages give different results. When the reference height and averaging time are not stated, wind-speed data at the same measurement point have no common conversion basis between different reports and cannot be directly compared.

#### 2.12.2 Comparison of Principle Routes

The four measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Ultrasonic anemometer | Non-contact (in air) | Difference of the propagation time of sound pulses in the two opposite directions | Wind speed converted from the time difference |
| 2. Mechanical anemometer | Contact | Rotational speed of the cups or propeller | Wind speed converted from the rotational speed |
| 3. Wind lidar | Non-contact (remote sensing) | Frequency shift of light scattered by aerosols | Radial wind speed converted from the frequency shift |
| 4. Pressure tube and Pitot tube | Contact | Difference between total pressure and static pressure | Wind speed converted from the pressure difference |

**1. Ultrasonic anemometer**

**Working principle:** Pairs of transducers send and receive sound pulses to each other, and the wind-speed component along that axis is obtained from the difference of the propagation times in the downwind and upwind directions; three pairs of transducers give the three-dimensional wind.

**Typical magnitudes and limitations:** Maximum wind-speed range about 65 m/s (234 km/h, depending on the model), data output rate up to 20 Hz (32 Hz option), 12-bit digital output (Gill, 2026). No moving parts and fast response, but affected by rain and salt spray, and requires anti-icing protection in cold regions.

**Advantages:** No moving parts, can measure three-dimensional wind and turbulence, fast response; the workhorse of floating-wind-turbine tests and offshore wind observation.

**Limitations:** Affected by rain and salt spray; requires anti-icing protection in cold regions.

**2. Mechanical anemometer**

**Working principle:** The cups or propeller rotate with the wind, and the rotational speed is approximately proportional to the wind speed, from which the wind speed is obtained.

**Typical magnitudes and limitations:** Simple structure, low cost, robust; has moving parts, responds slowly, and enters the linear segment only above the start-up wind speed, so each unit must be calibrated in a wind tunnel according to a method such as the American Society for Testing and Materials (ASTM) D5096 (ASTM, n.d.).

**Advantages:** No complex power and signal conditioning required, convenient for field deployment.

**Limitations:** Has moving parts, slow response; requires periodic maintenance and bearing replacement.

**3. Wind lidar**

**Working principle:** Laser light is emitted into the air, and the radial wind speed along the beam is obtained from the frequency shift of light scattered by aerosol particles; the wind profile is obtained through scanning and inversion.

**Typical magnitudes and limitations:** Can obtain wind profiles from tens to hundreds of metres above the sea surface without installing equipment at the measurement height; high cost, and affected by weather and aerosol conditions.

**Advantages:** Can measure the wind profile without installing equipment at the measurement height.

**Limitations:** High cost; the operating range decreases under rain, fog, and low-aerosol conditions.

**4. Pressure tube and Pitot tube**

**Working principle:** The flow velocity is obtained from the difference between total pressure and static pressure through the Bernoulli relationship.

**Typical magnitudes and limitations:** Simple and reliable; single-point measurement, easily blocked, and requires a known inflow direction; the pressure difference is quadratically related to the wind speed, so the sensitivity drops rapidly in the low-wind-speed segment.

**Advantages:** Simple and reliable.

**Limitations:** Single point; easily blocked; requires a known direction.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Low-wind-speed conditions |
| --- | --- | --- | --- | --- |
| 1. Ultrasonic anemometer | Applicable | Applicable | Applicable | Applicable |
| 2. Mechanical anemometer | Applicable | Applicable | Applicable | Restricted |
| 3. Wind lidar | Not evaluated | Applicable | Applicable | Not evaluated |
| 4. Pressure tube and Pitot tube | Applicable | Not evaluated | Not evaluated | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **wind measurement** is the "low-wind-speed condition": the wind speed in floating-wind-turbine model-test-type conditions is low (at model scale usually of the order of 1–2 m/s), where the mechanical anemometer is limited by the start-up wind speed and response speed, and the Pitot tube's sensitivity drops because the pressure difference is quadratically related to the wind speed; the ultrasonic anemometer has no start-up wind speed and responds quickly, and is not limited by these two factors.

**Route selection:** According to the three criteria of 2.12.1 (whether turbulence information is required, whether the measurement point falls in the wake, and whether an equivalent-thrust device or a real fan is used), the choice among the principles is as follows.

The ultrasonic anemometer has no moving parts, responds quickly, and can give three-dimensional wind, and is the main means of floating-wind-turbine tests and offshore wind observation; the mechanical type has a simple structure and low cost, but has moving parts, responds slowly, and enters the linear segment only above the start-up wind speed; wind lidar can give the wind profile from tens to hundreds of metres above the sea surface, at the cost of cost and weather conditions; the pressure tube and Pitot tube are simple and reliable, but are single-point measurements and easily blocked. Mean wind speed and direction place lower demands on response speed, while turbulence statistics and wind profiles require higher response speed or remote sensing. The measurement point should avoid the platform, hull, and model wakes, otherwise what is measured is local disturbance rather than the inflow.

#### 2.12.3 Implementation Considerations for the Three Scenarios

**Tank test:** In floating-wind-turbine model tests, the way the turbine thrust is generated (compressor, fan, or equivalent-thrust device) determines the role of the wind. If an equivalent-thrust device is used to apply the force directly, the wind itself does not need to be measured, but the thrust must be measured and calibrated; if a real fan is used, the inflow must be measured ahead of the model and the profile uniformity ensured.

The air flow in the test hall is affected by air conditioning, personnel, and equipment, and the near-model wind speed has lateral non-uniformity; at model scale the mainstream wind speed is low, and the same lateral speed difference accounts for a larger proportion, introducing a considerable additional yaw moment, which is more significant in small-scale models than at full scale.

The wind-speed profile and turbulence-level requirements of wind generation are given in the ITTC wind-generation procedure (ITTC 2024, 7.5-02-07-01.5); the similarity handling and the parameters to be reported for offshore-wind-turbine model tests are given in the ITTC offshore-wind-turbine model-test procedure (ITTC 2024, 7.5-02-07-03.8). At model scale the Reynolds number and the tip-speed ratio cannot be satisfied simultaneously (Froude similarity requires the model wind speed to decrease as the square root of the scale ratio, so the blade Reynolds number is far below full scale; while the tip-speed ratio requires the wind speed and rotational speed to match), and the test report should state the similarity criterion adopted and the bias thus introduced. For the dedicated uncertainty-evaluation framework of floating-wind-turbine model tests see the ITTC wind-turbine model-test uncertainty procedure (ITTC 2024, 7.5-02-07-03.17).

**Field sea trial:** The wakes of the platform, hull, and superstructure change the wind speed at the measurement point, and the relationship between the measurement position and the prevailing wind direction affects the inflow representativeness. The temperature effect of the two-way propagation-time method depends on the instrument's solving approach; for example, the wind-speed-component algorithm of the Gill WindMaster is independent of temperature within its working range; the acoustic-temperature output and humidity correction are separately defined (Gill Instruments, 2022). Salt spray and rain may produce anomalous segments, and the identification method and proportion of these affect the statistical result.

The energy-saving evaluation of wind-assisted and sail-assisted propulsion must be based on a credible inflow wind speed, with the calculation method given in the ITTC power-saving prediction procedure for wind-assisted ships (ITTC 2024, 7.5-02-03-01.9); the wind factor of speed loss is further given in the ITTC weather-factor procedure (ITTC 2024, 7.5-02-07-02.8).

**Long-term monitoring:** Long-term wind observation is dominated by ultrasonic anemometers and wind lidar. The advantage of wind lidar is obtaining the wind profile from tens to hundreds of metres above the sea surface, which is decisive for offshore wind-resource assessment. When calibration opportunities before deployment are limited, the self-diagnostic function and in-situ check method of the equipment need to be confirmed in advance. The data-gap rate and the calibration period jointly determine data availability in long-term observation, and both should be given together with the dataset.

#### 2.12.4 Calibration and Uncertainty

Anemometers are usually calibrated in a wind tunnel. The calibration of an ultrasonic anemometer includes the gain and orthogonality of each axis. Before field deployment, a zero check should be performed and the ambient temperature and humidity recorded.

Uncertainty components specific to meteorological and wind measurement include: the flow-field interference of the installation position and surrounding structures, the wind-tunnel calibration residual, short-term anomalies caused by rain and salt spray, instrument residual error caused by environmental changes, and the systematic bias caused by the measurement point falling in the wake region. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

The difference between calibration and usage conditions is another source: the wind tunnel gives a uniform inflow, while the actual inflow at sea and in the test hall carries turbulence, and directly applying the wind-tunnel calibration curve to the field biases the turbulence statistics; the test report should state the difference between the two and whether a field intercomparison was performed.

#### 2.12.5 Common Errors

- Directly using wind-tunnel calibration results in a marine environment without considering salt spray and rain.
- The measurement point being in the platform's own wake.
- Not stating the wind-load similarity criterion of the floating-wind-turbine model.
- Not reporting the data-gap rate and the removal proportion of anomalous segments in long-term observation.

#### 2.12.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.12.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The ultrasonic and mechanical anemometers in the table are general-purpose components sold on e-commerce platforms, not on the same tier as laboratory-grade models from Gill and Campbell, and prices at different tiers cannot be compared directly; the wind lidar is a Taobao complete-instrument listing. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Ultrasonic anemometer | Ultrasonic wind-speed and direction sensor | RS485 output, two-dimensional | Industrial component | £82.90 | Amazon UK 2026-10-06 | — |
| Ultrasonic anemometer | RS485 Modbus mini weather station | Wind speed/direction + air pressure + solar irradiance | Complete system | £246.86 | Amazon UK 2026-10-06 | With multi-element integration |
| Mechanical anemometer | HEEPDD three-cup wind-speed sensor | RS485 Modbus, 0.2 mph resolution | Industrial component | £49.16 | Amazon UK 2026-10-06 | Fixed-mounting type |
| Mechanical anemometer | Outdoor three-cup wind-speed and direction sensor | Range to 60 m/s, polycarbonate housing | Industrial component | £61.80 | Amazon UK 2026-10-06 | — |
| Wind lidar | Airborne wind lidar (UAV wind-speed and direction measurement) | Airborne type, UAV wind measurement | Complete system | ¥160,000 | Taobao 2026-10-06 | Beijing, darsunlaser |
| Wind lidar | Short-range wind lidar (meteorological service detection) | Short-range meteorological service detection | Complete system | ¥200,000 | Taobao 2026-10-06 | Beijing, darsunlaser; another tier in the same store |
| Wind lidar | Doppler wind lidar (three-dimensional scanning, turbine-wake detection) | Three-dimensional scanning, turbine-wake detection | Complete system | ¥700,000 | Taobao 2026-10-06 | Beijing, Lanjing Electronic Technology enterprise store; upper bound of this category |
| Marine weather-station data acquisition | Bresser 5-in-1 wireless weather station | Wireless sensor set + colour-screen console | Complete system | £124.99 | Amazon UK 2026-10-06 | Civil grade, not marine grade |

Main supply channels: Gill Instruments, Campbell Scientific, Thies, Vaisala, Lufft; wind lidar from the ZephIR and WindCube series. Channel websites are given in Appendix C.

### 2.13 Position and Navigation

#### 2.13.1 Measurement Target and Criteria

The objects of measurement are the spatial positions of the measurement platform and the target. In tank tests, position information comes mainly from the carriage displacement encoder and optical motion capture, used to establish the correspondence between model position and time. In field and long-term monitoring, position and navigation involve four types of means: global navigation satellite systems, acoustic positioning, Doppler velocity measurement, and inertial navigation. For the trajectory and position recording requirements of free-running model tests (models with their own propulsion, not dependent on carriage towing) see the ITTC self-propulsion test procedure (ITTC 2024, 7.5-02-06-01). Derived from the position and attitude time histories are: track and heading, velocity and acceleration, drift and cumulative displacement, and the offset relative to a reference point or an array (an array of transducers arranged in a known geometry).

These methods differ mainly in the following respects. First, the combination of accuracy and update rate: satellite positioning has a high update rate but depends on a sky view, while acoustic positioning can give underwater position combined with known references, with its update rate limited by the operating distance and system configuration. Second, whether operation underwater is required — satellite signals decay rapidly in water, and underwater positioning commonly uses acoustic positioning, Doppler velocity measurement, and inertial navigation, with optically calibrated measurement possible at short range. Third, whether absolute position or relative track is required: position information in a tank is mostly used to establish the correspondence between model position and time, belonging to relative track; field and long-term monitoring often require absolute position.

Position quantities also carry datum conventions: the coordinate system, reference point, and axis directions must be stated. In tank tests, at least the carriage coordinate system, tank coordinate system, and model coordinate system must be distinguished; in field measurement, geodetic coordinates, velocity relative to the seabed, and velocity relative to the water column must be distinguished. When the coordinate system and reference point are not stated, the same data can neither be rechecked nor compared with other results.

#### 2.13.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Global navigation satellite system | Non-contact (receiving) | Propagation time or carrier phase of satellite signals | Position solved from the observables |
| 2. Acoustic positioning | Non-contact (in water) | Propagation time; ultra-short baseline also uses inter-element phase or arrival-time difference | Position solved from distance, direction, and references |
| 3. Doppler velocity measurement | Non-contact (in water) | Doppler frequency shift of the bottom echo | Displacement obtained by integrating the velocity |
| 4. Inertial navigation | Contact (body-fixed) | Specific force and angular velocity | Angular velocity used for attitude solution; specific force, after coordinate transformation and gravity compensation, integrated for velocity and position |
| 5. Carriage displacement and optical measurement | Contact and non-contact | Encoder pulses and marker images | Encoder count converted; optical reconstructed through geometric calibration |

**1. Global navigation satellite system**

**Working principle:** The receiver solves the propagation time or carrier phase of signals from several satellites to obtain the three-dimensional position of the antenna phase centre; real-time kinematic (RTK) differential positioning using carrier phase can raise the positioning accuracy to the centimetre level.

**Typical magnitudes and limitations:** Absolute position, long-term stability, no cumulative drift; multi-frequency, multi-constellation real-time-kinematic positioning modules can give centimetre-level positioning (u-blox, 2026). The signal decays rapidly in water and fails underwater; requires an open sky view, and multipath and the ionosphere introduce errors (see 2.13.4).

**Advantages:** Gives absolute position without error accumulating over time; accuracy can be raised to the centimetre level through differential positioning; small receiver and low cost.

**Limitations:** Fails underwater; requires an open sky view; accuracy and update rate are affected by satellite geometry, multipath, and the ionosphere.

**2. Acoustic positioning**

**Working principle:** The acoustic-pulse propagation time provides distance information. Long-baseline (LBL) systems solve position from the distances to several transponders at known positions; ultra-short-baseline (USBL) systems use a compact array to measure range and direction, with the direction information coming from the inter-element phase or arrival-time difference. The relative acoustic position, combined with known geodetic references and the platform position and attitude, can be converted to geographic coordinates (Sonardyne, n.d.-a, n.d.-b).

**Typical magnitudes and limitations:** Long-baseline systems usually require pre-deployment and surveying of the array positions; shipborne ultra-short-baseline systems depend on transducer installation, lever arms, and position and attitude references. The positioning error and update rate are jointly affected by the sound-speed profile, the geometric arrangement, and the acoustic propagation time (Sonardyne, n.d.-a, n.d.-b).

**Advantages:** Combined with known geodetic references, can give geographic position underwater, and combined with inertial navigation and Doppler velocity measurement can cover a larger operating range.

**Limitations:** The workloads of long-baseline array deployment and ultra-short-baseline installation calibration are different; both types are affected by the sound-speed profile, geometric arrangement, and propagation path, and the operating distance and update rate constrain each other.

**3. Doppler velocity measurement**

**Working principle:** Acoustic pulses are transmitted toward the seabed, and the velocity and altitude relative to the seabed are obtained from the Doppler frequency shift of the bottom echo; the velocity is integrated over time to give the displacement relative to the seabed (dead reckoning).

**Typical magnitudes and limitations:** Does not depend on external arrays and requires no pre-deployment, installed on the whole underwater platform; requires valid bottom tracking (the operating mode that measures velocity relative to the seabed using the bottom echo), sensitive to seabed type, slope, and water depth; when used alone, the displacement accumulates error over time.

**Advantages:** Highly autonomous, not limited by the coverage of an acoustic array; gives the altitude above bottom at the same time, suitable for near-bottom operations.

**Limitations:** Requires valid bottom tracking; sensitive to seabed conditions and water depth; when used alone, the displacement accumulates error over time.

**4. Inertial navigation**

**Working principle:** Accelerometers measure specific force, and gyroscopes measure angular velocity; the angular velocity is used for attitude solution, and the specific force, after coordinate transformation and gravity compensation, forms the motion acceleration, which is integrated once for velocity and again for position (VectorNav, n.d.).

**Typical magnitudes and limitations:** High short-term accuracy, independent of external signals, usable to fill the periods of satellite loss of lock; industrial-grade devices can reach an angular resolution of 0.001° and an attitude data update rate of 400 Hz (VectorNav, 2026). Position is obtained by integration, and the zero bias accumulates into drift over time; high-accuracy-grade devices are costly.

**Advantages:** Fully autonomous, continuous output and high update rate, the core of integrated navigation.

**Limitations:** Position obtained by integration, with error accumulating over time; high-accuracy grades are costly.

**5. Carriage displacement and optical measurement**

**Working principle:** The displacement of the carriage along the tank length is given by an encoder, and the position of the model relative to the carriage is given by optical motion capture or displacement sensors; the two together give the model position in the tank coordinate system.

**Typical magnitudes and limitations:** High accuracy, real-time, update rate not limited by external conditions, but usable only within the facility: the carriage displacement encoder covers only the tank-length direction, and the lateral position still needs to be completed by optical or displacement sensors; the two sets of information must be time-synchronised (see 2.13.3).

**Advantages:** High accuracy, strong real-time capability, independent of underwater acoustic or satellite facilities.

**Limitations:** Usable only within the facility; requires time synchronisation and coordinate-system alignment.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Underwater conditions |
| --- | --- | --- | --- | --- |
| 1. Global navigation satellite system | Not evaluated | Applicable | Applicable | Not applicable |
| 2. Acoustic positioning | Not evaluated | Applicable | Not evaluated | Applicable |
| 3. Doppler velocity measurement | Not evaluated | Applicable | Not evaluated | Applicable |
| 4. Inertial navigation | Applicable | Applicable | Not evaluated | Applicable |
| 5. Carriage displacement and optical measurement | Applicable | Not evaluated | Not evaluated | Restricted (optical) |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **position and navigation measurement** is the "underwater condition": satellite positioning fails underwater, acoustic, Doppler-velocity, and inertial navigation are the common means, and short-range optical positioning is limited by light-transmission and calibration conditions.

**Route selection:** According to the three criteria of 2.13.1 (the accuracy-update-rate combination, whether underwater operation is required, and absolute position or relative track), the choice among the principles is as follows.

Satellite positioning gives geographic position but depends on a sky view, and the signal cannot be used directly underwater. Acoustic positioning combined with known references can give underwater position: long-baseline requires array deployment, and ultra-short-baseline requires the corresponding platform position, attitude, and installation calibration. Doppler velocity measurement provides velocity and altitude relative to the seabed, depends on valid bottom tracking, and accumulates error when integrated alone; inertial navigation is independent of external signals, but the zero bias also accumulates into drift. Within a facility, encoders and optical measurement are suitable for local motion recording, with the optical range determined by the field of view, occlusion, and medium conditions.

Actual schemes are usually integrated navigation: underwater operations use "inertial navigation + Doppler velocity measurement + acoustic positioning", and surface and near-surface operations use "inertial navigation + satellite positioning", with the sensors constraining each other to suppress drift. The weighting of the combination and the fusion algorithm (filter type, process noise, and observation noise) should be recorded together with the data.

#### 2.13.3 Implementation Considerations for the Three Scenarios

**Tank test:** The carriage displacement encoder gives the carriage position along the tank length, and the position of the model relative to the carriage is given by optical motion capture or displacement sensors. The time synchronisation of these two sets of information must be established, otherwise the correspondence between resistance and speed will be in error. The position-recording accuracy during the carriage acceleration and deceleration phases affects the reliability of velocity estimated by position differentiation.

The position and heading uncertainty evaluation of manoeuvring tests is given in the ITTC manoeuvring uncertainty procedure (ITTC 2024, 7.5-02-06-04), and the uncertainty evaluation of self-propulsion tests has a separate procedure (ITTC 2024, 7.5-02-06-05).

The use of the position data determines the recording approach: obtaining velocity from position requires unifying the time stamps of the encoder and the image to the same time base, and evaluating manoeuvrability requires heading and trajectory synchronisation. If the two sets of information come from different systems, a static and a low-speed dynamic intercomparison should be performed before the test to confirm the zero point and delay.

**Field sea trial:** The position of an underwater platform is usually given by the combination of inertial navigation, Doppler velocity measurement, and acoustic positioning. The sound-speed profile is the main error source of acoustic positioning, and measuring the sound-speed profile before deployment is a necessary step. The fusion algorithm of integrated navigation and the weighting settings of each sensor should be recorded together with the data for rechecking.

The accuracy of acoustic positioning is jointly affected by the sound-speed profile and the array geometry: the sound-speed profile varies with time and space, and sound rays refract and bend in it, so the slant-range error solved under the straight-line-propagation assumption grows with the operating distance; therefore the array calibration and sound-speed-profile measurement should preferably be completed in the same operation, with their respective time stamps recorded, to avoid the two corresponding to sound-speed fields of different instants.

**Long-term monitoring:** Long-term position monitoring is dominated by satellite positioning, used to observe the slow cumulative displacement of structures. Positioning accuracy is affected by multipath effects (errors caused by signals reflected along different paths being superimposed) and the ionosphere, and the extraction of long-term trends requires separation from short-term fluctuations; when assessing slow cumulative displacement, a displacement trend with an uncertainty interval can be extracted from the position series. Inertial units can be used to fill the periods of satellite loss of lock, but the integration duration must be limited, otherwise the drift contaminates the trend.

#### 2.13.4 Calibration and Uncertainty

The accuracy specification of satellite positioning needs to be verified under actual measurement conditions, and cannot be quoted only from the data sheet. Acoustic positioning systems require on-site calibration of the array positions and measurement of the sound-speed profile.

Uncertainty components specific to position and navigation measurement include: the definition error of the coordinate system and datum, multipath and occlusion of satellite signals, the sound-speed-profile correction residual and array-geometry calibration error of acoustic positioning, the bottom-tracking failure and sound-speed-compensation error of Doppler velocity measurement, the integration drift of the inertial unit, and the weighting choice of the integrated-navigation fusion algorithm. The fusion parameters of integrated navigation (filter type, process noise, and observation noise) should be recorded together with the data. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01); the uncertainty evaluation of self-propulsion and manoeuvring tests has dedicated procedures (ITTC 2024, 7.5-02-06-04; ITTC 2024, 7.5-02-06-05).

Quantities derived from position bring one class of transfer error: velocity and acceleration are respectively the first and second derivatives of position, and the high-frequency noise in position is amplified after differentiation, so the filtering method and cutoff frequency before differentiation must be stated; with different filtering parameters, the same trajectory data give significantly different acceleration peaks.

#### 2.13.5 Common Errors

- Not time-synchronising the carriage encoder and optical motion data.
- Not measuring the sound-speed profile for acoustic positioning.
- Directly quoting the manual value for satellite-positioning accuracy without verifying it under actual measurement conditions.
- Not separating long-term cumulative displacement from short-term fluctuations.
- Treating the fusion parameters of integrated navigation as implementation details without giving them in the report.

#### 2.13.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.13.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. Satellite positioning includes two classes, component-level modules and complete handheld instruments, and prices at different tiers cannot be compared directly; the Doppler velocimeters, inertial navigation systems, and acoustic positioning systems are Taobao complete-instrument listings. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Satellite positioning receiver | Waveshare LG290P quad-frequency GNSS module | L1+L2+L5+E6, RTK centimetre-level | Component | £99.99 | Amazon UK 2026-10-06 | Component-level |
| Satellite positioning receiver | WITMOTION WTRTK-982 | UM982, 1408 channels, real-time RTK | Component | £162.00 | Amazon UK 2026-10-06 | Component-level, not to be compared side by side with measurement-grade inertial-navigation complete instruments |
| Satellite positioning receiver | SMA25R handheld RTK surveying system | PPP accuracy 10 cm, tilt compensation | Complete system | £777.00 | Amazon UK 2026-10-06 | Complete instrument, with software |
| Doppler velocimeter | H1000 underwater-robot navigation sensor DVL | For small ROVs | Complete system | ¥58,000 | Taobao 2026-10-06 | Qingdao, Shandong, 12-year-old store |
| Doppler velocimeter | Water Linked A50 DVL Doppler log | Underwater dead reckoning | Complete system | ¥69,800 | Taobao 2026-10-06 | Beijing |
| Doppler velocimeter | DVL1000 Doppler log (4000 m) | 4000 m pressure rating | Complete system | ¥523,000 | Taobao 2026-10-06 | Tianjin, Nortek-series store; deep-sea type, upper bound of this category |
| Inertial navigation system | Ruiguan GNS800 high-accuracy INS integrated-navigation system | Three-dimensional attitude, heading, and position | Complete system | ¥26,000 | Taobao 2026-10-06 | Shenzhen, Guangdong, enterprise store |
| Acoustic positioning system | USBL ultra-short-baseline acoustic positioning system | Ultra-short-baseline positioning | Complete system | ¥800,000 (negotiable) | Taobao 2026-10-06 | Shenzhen, Guangdong, 16-year-old store; negotiable item, transaction price requires inquiry |

Main supply channels: Teledyne RDI, Nortek (Doppler velocity measurement); Exail (formerly iXblue), Sonardyne, KVH, VectorNav (inertial navigation); EvoLogics, Kongsberg (acoustic positioning); Trimble, u-blox (satellite positioning). Channel websites are given in Appendix C.

### 2.14 Acoustics and Underwater Sensing

#### 2.14.1 Measurement Target and Criteria

The object of measurement is the acoustic-pressure signal in water, used for noise measurement, cavitation detection, sound-source localisation, and underwater communication. In tank tests the main applications are propeller and propulsor noise, cavitation inception (the critical state at which the local pressure drops to the saturated vapour pressure and cavities begin to appear in the water body), and flow-noise measurement; in field and long-term monitoring, acoustics also serves communication and target detection.

In tank tests what is directly measured is the acoustic-pressure time history at the measurement point, from which are derived: the total sound-pressure level (a logarithmic ratio referenced to a reference sound pressure) and the one-third-octave spectrum (the spectrum divided into one-third-octave bands), the critical rotational speeds of cavitation inception and disappearance, cavitation-induced pressure fluctuation, the directivity and directivity pattern of the sound source (the distribution of acoustic radiation with direction), and the attenuation along the propagation path. In field and long-term monitoring, the communication bit-error rate and target bearing are also derived.

Cavitation noise is a broadband quantity (energy distributed over a very wide frequency range with no single characteristic frequency), and the distribution of energy over frequency is itself the result to be measured, so this type of measurement places higher demands on bandwidth and dynamic range than on absolute sensitivity: when the upper frequency limit is cut too low, the measured total sound-pressure level is too low and the distribution of energy over the bands (the spectral shape) cannot be resolved.

These methods differ mainly in the following respects. First, **the frequency band and sound-pressure-level range**: the measurement band of propeller cavitation noise starts from about 1 Hz with an upper limit of tens of kilohertz or even above 100 kHz (ITTC 2024, 7.5-02-03-03.9), while the band of far-field acoustic propagation and communication is lower, and the two place different requirements on the sensitivity and bandwidth of the hydrophone. Second, **whether spatial-localisation capability is required**: a single hydrophone gives only the sound pressure at the measurement point, while sound-source localisation requires an array and beamforming (delay-and-sum weighting of the channels to give directional information), with the number of channels and the element spacing determining the resolvable frequency and direction ranges. Third, **whether the absolute sound-pressure level is required**: this determines the completeness of the calibration chain — whether only relative comparison is used, or traceability to a standard hydrophone is required (method in IEC 60565). Fourth, **the recording of the measurement point, background noise, and conditions**: a hydrophone gives only the sound pressure at one point where it is located: whether the measured value represents the sound source depends on two things — one is the distance of the measurement point from reflecting surfaces such as windows and tank walls (when the distance is too small, what is measured is the sound field after reflection and reverberation are superimposed, not the free field); the other is the background-noise level of the facility itself (sound pressure below the background cannot be measured, and the background determines the lower limit of the measurable dynamic range). Both the measurement-point position and the background-noise measurement result should be recorded with the test; cavitation tests must also record the water quality and gas-content state synchronously, otherwise the critical rotational speeds of inception and disappearance are not comparable.

#### 2.14.2 Comparison of Principle Routes

This section introduces four classes of acoustic devices and systems: a single hydrophone, a hydrophone array, a towed array, and an acoustic modem.

| Instrument | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Single hydrophone | Contact (listening in water) | Output voltage of the transducer | Sound pressure converted through the sensitivity |
| 2. Hydrophone array | Contact (multi-point synchronised) | Voltage time history of each channel | Sound-source bearing given after beamforming |
| 3. Towed array | Contact (towed deployment) | Voltage time history along the array | Target bearing given after beamforming |
| 4. Acoustic modem | Contact (transmit-receive) | Demodulated symbol sequence | Information recovered from the symbols |

**1. Single hydrophone**

**Working principle:** The piezoelectric ceramic produces charge under acoustic pressure, which is converted to voltage through a charge amplifier or a built-in preamplifier, and the sound pressure is converted from the calibrated sensitivity.

**Typical magnitudes and limitations:** Small hydrophones can cover 0.1 Hz to 180 kHz, with a receiving sensitivity of about −211 dB re 1 V/µPa, omnidirectional over a wide band, and fully waterproof (Brüel & Kjær, n.d.).

**Advantages:** Small size, wide frequency band, omnidirectional reception, the basic element of noise and cavitation measurement.

**Limitations:** Gives only the sound pressure at the measurement point and cannot localise; reflection from the mounting bracket and model surface causes sound-field distortion.

**2. Hydrophone array**

**Working principle:** Several hydrophones receive synchronously, and the channel signals are delay-summed or beamformed, using the receiving directivity of the array to determine the sound-source bearing and localise local noise regions. The determination of the source radiation directivity also requires comparing the results in different observation directions (ITTC 2024, 7.5-02-03-03.9, §2.1.3).

**Typical magnitudes and limitations:** The array aperture (the distance between the first and last elements of the array) determines the resolvable lower frequency limit — the larger the aperture, the better the low-frequency resolution; the element spacing (the spacing between adjacent transducers) determines the upper limit — the smaller the spacing, the higher the highest frequency resolvable without aliasing, and spatial aliasing occurs when the spacing is too large. After beamforming the array forms a highly directional response in a certain direction, and rotating this direction scans the model to localise local noise sources; the number of usable channels is limited by the acquisition facilities and budget (ITTC 2024, 7.5-02-03-03.9, §2.1.3).

**Advantages:** Can perform local sound-source localisation and form selective reception for different incoming-sound directions.

**Limitations:** Requires multi-channel synchronous acquisition; the element spacing and the highest resolvable frequency constrain each other.

**3. Towed array**

**Working principle:** Hydrophones are arranged at equal spacing along a flexible cable into a long array, and the whole array serves as one large-aperture (physically long array, with a large distance between the first and last elements) receiving array; beamforming is performed on the channels, and the target bearing is obtained from the arrival-time differences of the same signal at the elements.

**Typical magnitudes and limitations:** The array length can reach tens to a hundred metres; the larger the aperture, the higher the bearing-resolution capability.

**Advantages:** A far larger aperture than a conventional hydrophone array, with high bearing-resolution capability; can be towed by a ship for continuous observation.

**Limitations:** Severe shallow-water multipath (the phenomenon in which the same signal, after multiple reflections from the sea surface and seabed, arrives at the receiving point at different times along different paths and is superimposed); cannot be deployed at tank scale; requires a towing platform and cable management.

**4. Acoustic modem**

**Working principle:** Acoustic waves are used to transmit coded signals underwater, and the receiving end demodulates and recovers the data.

**Typical magnitudes and limitations:** Operating distances of hundreds of metres to several kilometres, with rate and distance constraining each other: the farther the distance and the stronger the multipath, the lower the usable rate.

**Advantages:** Can transmit data back over hundreds of metres to several kilometres without a cable.

**Limitations:** Rate and distance trade off against each other; multipath in shallow water severely affects the bit-error rate.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Cavitation conditions |
| --- | --- | --- | --- | --- |
| 1. Single hydrophone | Applicable | Applicable | Applicable | Applicable |
| 2. Hydrophone array | Applicable | Restricted | Not evaluated | Restricted |
| 3. Towed array | Not evaluated | Applicable | Not evaluated | Not evaluated |
| 4. Acoustic modem | Not evaluated | Applicable | Applicable | Not evaluated |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **acoustic measurement** is the "cavitation condition": cavitation noise is the main application of acoustic measurement in tank tests, while the cavities themselves change the sound propagation and the sound field at the transducer surface, which is a problem specific to acoustic measurement.

**Route selection:** According to the four criteria of 2.14.1 (the frequency band and sound-pressure-level range, whether spatial-localisation capability is required, whether the absolute sound-pressure level is required, and the recording of the measurement point, background noise, and conditions), the choice among the principles is as follows.

The single hydrophone is small, broadband, and omnidirectional, but gives only the sound pressure at the measurement point; arrays can be used for sound-source localisation and measurement with receiving directivity, with the array aperture determining the lower frequency limit and the element spacing the upper limit; towed arrays rely on a large aperture for high bearing resolution, but are difficult to deploy in shallow water and at tank scale; the acoustic modem addresses data backhaul, with rate and operating distance constraining each other. Traceable sensitivity calibration, the relationship between the measurement point and reflecting surfaces, and the background noise of each condition jointly affect the acoustic measurement result.

#### 2.14.3 Implementation Considerations for the Three Scenarios

**Tank test:** The main applications are propeller and propulsor noise, cavitation inception, and flow noise. The implementation requirements of model-scale cavitation tests are given in the ITTC cavitation test procedure (ITTC 2024, 7.5-02-03-03.1); the visual description and measurement of cavitation are given in the corresponding ITTC procedure (ITTC 2024, 7.5-02-03-03.2); the model-scale measurement of cavitation-induced pressure fluctuation is given in another ITTC procedure (ITTC 2024, 7.5-02-03-03.3). The noise and load measurement under extreme conditions such as propeller emergence is given in the ITTC rare-event procedure (ITTC 2024, 7.5-02-07-02.3). The sensitivity calibration of hydrophones should be traceable, with the method in IEC 60565.

There are four points in deployment and condition recording. First, the hydrophone should be kept away from the cavitation region of the model but still within the effective sound field, to avoid directly withstanding cavity impact; the distance of the hydrophone from a window or tank wall should not be less than 0.2 m, usually 0.3 to 1 m, to reduce wall reflection and reverberation (the sound field formed by the superposition of multiple reflections) (ITTC 2024, 7.5-02-03-03.9, §2.1.3). Second, at least one hydrophone should be placed in the propeller-disc plane, with one more each upstream/downstream and on the beam side when conditions allow, and an array used when local noise sources need localisation (ITTC 2024, 7.5-02-03-03.9, §2.1.3). Third, the background noise must be measured once for each noise condition with the same measurement chain in the non-cavitating state, for background-noise correction afterwards (ITTC 2024, 7.5-02-03-03.9, §2.4, §2.5.3). Fourth, the judgement of cavitation inception should look at the noise spectrum and the visual record simultaneously; judging by the sound-pressure level alone easily mistakes the fluctuation of background noise for inception; the test report should also state the water-quality treatment, because the cavitation-nuclei size distribution and the dissolved-gas content directly affect the critical rotational speeds of inception and disappearance, and the gas-content ratio should be recorded as a condition parameter (ITTC 2024, 7.5-02-03-03.1, §2.8).

**Field sea trial:** Platform self-noise and background noise are the main interference: mechanical noise, propeller noise, and sea-state noise all enter the measured frequency band, so the measurement point should be kept away from mechanical noise sources, and a background-noise record should be taken once before and once after the measurement. Acoustic modems are severely affected by multipath in shallow water, and the communication rate must be derated according to field conditions. Field absolute sound-pressure-level measurement can still rely on traceable hydrophone sensitivity and a complete acquisition chain, while evaluating the installation and environmental effects; when effective calibration is lacking, only relative comparison can be made (National Physical Laboratory, n.d.). Underwater acoustic propagation is in turn controlled by the temperature-salinity profile: sound rays refract at the thermocline, and the operating distance and positioning accuracy change accordingly, so field measurement should record the CTD profile or sound-speed profile at the same time, to explain the differences of the same equipment under different sea states and seasons.

In measurement-point arrangement, it is difficult in the field to control the wall distance as in a tank: the hull, platform columns, and the sea surface itself are all reflecting surfaces, and the sound field is more complex than in a tank. A feasible practice is to record the same phenomenon simultaneously at two measurement points at different distances, using the difference between the two to judge the relative magnitudes of reflection and propagation loss.

**Long-term monitoring:** Long-term underwater acoustics is dominated by passive monitoring and communication. Three items require emphasis: first, biofouling changes the acoustic characteristics of the transducer surface and hence the sensitivity, and a check is needed once before and once after deployment; second, long-term power and data backhaul, usually using an acoustic modem to transmit data back to a surface buoy and then by satellite. Third, the comparability of long-term data depends on the traceability of the sensitivity check: a pre-deployment check and a post-recovery recheck, with the difference between the two being the sensitivity drift of that deployment period, which should be given as part of the data-quality description.

Passive acoustics can record ambient sound without actively transmitting acoustic signals, but continuous reception, acquisition, storage, and backhaul still consume electrical power. The ambient-noise baseline formed by recording helps analyse subsequent anomalies; continuous raw waveforms, triggered recording, and feature-quantity recording differ in data volume and power consumption.

#### 2.14.4 Calibration and Uncertainty

Hydrophones are usually calibrated by the reciprocity method or by comparison with a standard hydrophone, with the method in IEC 60565; the calibration should be performed frequency by frequency within the frequency band of use, giving the frequency-response curve of the sensitivity rather than a single-point sensitivity.

Uncertainty sources include: the uncertainty of the hydrophone calibration, the sound-field distortion caused by installation and bracket reflection, background noise, the propagation-correction residual caused by the sound-speed profile, and the time-synchronisation error with other channels. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

Cavitation-noise measurement has three additional specific components: the residual of the background-noise correction (the correction is determined by the difference between the measurement level and the background level, and when the two are close, the uncertainty of the correction itself increases rapidly), the distance-normalisation error (the radiated noise level is converted from the measurement-point level to a 1 m reference distance by spherical spreading, in which the sound intensity decays with the square of distance, and different corrections are given depending on whether the acoustic centre — the equivalent sound-source position — is taken as the propeller-shaft centre, the 0.7R position (0.7 times the propeller radius), or the cavity-collapse centre), and the bias caused by tank reverberation and low-frequency acoustic modes (ITTC 2024, 7.5-02-03-03.9, §2.5.3, §2.5.4, §2.6). The test report should state the acoustic-centre position and reference distance used, and the spectral-band division (one-third-octave or narrowband); cavitation-noise level is usually given as one-third-octave band level, in dB re 1 µPa²m² (ITTC 2024, 7.5-02-03-03.9, §2.5.4). The test report should also give condition parameters such as the cavitation number, rotational speed, and gas content.

#### 2.14.5 Common Errors

- Using the measurement-point sound pressure of a single hydrophone to represent the directivity of the whole sound source.
- Calibrating only a single-point sensitivity without giving the frequency response.
- Not recording background noise in field measurement.
- Judging cavitation inception only by the sound-pressure level without checking against the visual record.
- Not checking the sensitivity before and after deployment in long-term deployment.
- Installing the hydrophone close to the tank wall or observation window without leaving sufficient distance (ITTC 2024, 7.5-02-03-03.9, §2.1.3).
- Not recording the water quality and gas-content state, so the critical rotational speed of cavitation inception is not comparable (ITTC 2024, 7.5-02-03-03.1, §2.8).

#### 2.14.6 Models, Specifications, Prices, and Supply Channels

The table below lists the product channels corresponding to the principles in 2.14.2, with a search date of 2026-10-06: the single hydrophones are Taobao listings, in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference; hydrophone arrays, towed arrays, and acoustic modems have no published price and require manufacturer quotation. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Single hydrophone | Brüel & Kjær Type 8103 hydrophone | Reference model B&K 8103 | Component | ¥64,800 (negotiable) | Taobao 2026-10-06 | Dongguan, Guangdong, Shenzhen Daxin Precision Electromechanics; negotiable listing, transaction price requires inquiry |
| Single hydrophone | RP FOPH2000 fibre-optic hydrophone | Fibre-optic type | Component | ¥15,000 (negotiable) | Taobao 2026-10-06 | Shanghai, Cedar Industrial Automation; fibre-optic type, mid-range price |
| Single hydrophone | High-sensitivity miniature hydrophone (pipeline leak detection / marine monitoring acoustic sensor) | For pipeline leak detection and marine monitoring | Component | ¥2,500 | Taobao 2026-10-06 | Shengkai'an Environmental Monitoring Equipment enterprise store; domestic low end, as a lower price bound |
| Hydrophone array | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |
| Towed array | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |
| Acoustic modem | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |

Main supply channels: Brüel & Kjær, Teledyne Reson, Kongsberg, Sonardyne, EvoLogics. Channel websites are given in Appendix C.

### 2.15 Terrain and Geophysics

#### 2.15.1 Measurement Target and Criteria

The objects of measurement are the three-dimensional terrain of the bed or seabed, and the shallow sub-seabed structure. In tank tests it is mainly used for scour-pit development, sand-bed morphology evolution, and bed deformation measurement. In field and long-term monitoring it is used for bathymetry, geomorphological survey, and strata-structure detection. For the similarity criteria and measurement techniques of physical-model tests see Hughes (1993).

These methods differ mainly in the following respects. First, the combination of spatial resolution and coverage: millimetre-level resolution usually covers only metre-level range, while large-area coverage can only give centimetre-to-metre-level resolution. Second, whether it must be acquired in real time in water, or can be scanned after draining — tank tests mostly use optical scanning after draining, while field large-area or turbid-water surveys usually use acoustic methods, and optical methods can also be used in clear shallow water (NOAA Office of Coast Survey, n.d.). Third, water turbidity: optical methods are restricted in turbid water, while acoustic bathymetry solves the elevation by combining information such as sound speed, beam direction, and attitude.

Quantities derived from terrain include: scour-pit depth and extent, the along-length and planar distribution of bed elevation, volume change, and bed-slope and roughness indicators. What scour research really cares about is the difference between two measurements, so the positioning consistency and calibration consistency between the two are more critical than the absolute accuracy of a single measurement.

#### 2.15.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Laser line scanning | Non-contact | Distance along the scan line | Terrain synthesised from distance and motion |
| 2. Structured light and photogrammetry | Non-contact | Image coordinates of fringes or features | Three-dimensional surface reconstructed through calibration |
| 3. Multibeam bathymetry | Non-contact (underwater acoustic) | Round-trip time of each beam | Depth solved from sound speed and time delay |
| 4. Side-scan sonar | Non-contact (underwater acoustic) | Time series of the echo intensity on both sides | Imaged from the echo series |
| 5. Sub-bottom profiler | Non-contact (underwater acoustic) | Time series of shallow reflections | Structure interpreted from the reflection time delay |

**1. Laser line scanning**

**Working principle:** A laser projects a very thin laser line onto the bed (the surface of the sediment layer at the bottom of the flume), and a camera records the shape of this line on the bed from another angle; the height of each point on the line is calculated through triangulation, and the scanning mechanism sweeps line by line across the whole bed to form the three-dimensional terrain.

**Typical magnitudes and limitations:** Millimetre-level elevation resolution and metre-level single-pass coverage (depending on the travel of the scanning mechanism); generally requires scanning in air after draining, or in sufficiently transparent water; water refraction changes the optical path and must be corrected.

**Advantages:** High resolution, fast scanning, can be automatically acquired with a moving platform, and the point cloud directly gives the three-dimensional terrain.

**Limitations:** Requires draining or sufficiently transparent water; water refraction must be corrected; small single-pass coverage.

**2. Structured light and photogrammetry**

**Working principle:** A projector projects a known fringe or speckle pattern onto the bed (or the bed's own texture is used directly), and a camera records the deformation of the pattern on the bed; the three-dimensional surface is reconstructed through calibration and matching.

**Typical magnitudes and limitations:** Millimetre-level elevation resolution, with coverage determined by the camera arrangement and baseline; requires calibration, illumination, and sufficient surface texture, and water turbidity significantly reduces the matching quality.

**Advantages:** Full-field, non-contact, low equipment cost, suitable for rapid comparison between multiple drainings.

**Limitations:** Requires calibration and illumination; affected by turbidity and surface reflection; the reconstruction accuracy depends on the texture quality.

**3. Multibeam bathymetry**

**Working principle:** The transducer transmits a group of narrow beams toward the seabed in a fan, each beam giving the slant range from the round-trip time and sound speed and the direction from the beam angle, synthesising a depth profile across the track; profiles are stitched together as the ship advances to give the swath-covered seabed terrain.

**Typical magnitudes and limitations:** A shipborne shallow-water multibeam can have a maximum working water depth of 500 m, with optional dual frequency and roll, pitch, and heading stabilisation (Kongsberg, 2026); the resolution varies with the water depth and beam angle, usually centimetre to metre level; sound-speed-profile and tide corrections are mandatory.

**Advantages:** Large coverage, high efficiency, continuous measurement while underway, giving depth and echo intensity simultaneously.

**Limitations:** Shipborne equipment, high cost; requires sound-speed-profile, tide, and attitude corrections; accuracy drops at shallow-water edges and steep slopes.

**4. Side-scan sonar**

**Working principle:** The towfish transmits fan-shaped acoustic pulses to both sides and receives the sequence of seabed echo intensity with time; the echo intensity reflects the seabed type and terrain relief, and is expanded over time into geomorphological images of both sides (not directly giving depth).

**Typical magnitudes and limitations:** The towfish (the sonar transducer carrier towed behind the ship) can choose a 400/900 kHz or 600/1600 kHz dual-frequency combination, with built-in heading, pitch, roll, and depth sensors; with CHIRP pulses the operating range is about 50% greater than a non-CHIRP system at the same frequency (EdgeTech, 2026). High imaging resolution, but does not directly give depth.

**Advantages:** Intuitive geomorphological texture imaging and high resolution, suitable for rapid scanning of seabed type and obstacles.

**Limitations:** Does not directly give depth and must be combined with bathymetry; towing operations are limited by ship speed and sea state.

**5. Sub-bottom profiler**

**Working principle:** Low-frequency acoustic pulses are transmitted toward the seabed; the acoustic waves penetrate the shallow sediments and reflect at stratum interfaces of different acoustic impedance; the depth is converted from the reflection arrival time and sound speed, giving the profile structure of the shallow strata.

**Typical magnitudes and limitations:** Vertical resolution of decimetre to metre level, with penetration depth related to the stratum properties (grain size, gas content); the results need interpretation combined with geological data.

**Advantages:** Can reveal shallow-strata structure, a lower-cost alternative to drilling.

**Limitations:** Limited resolution; penetration depth affected by the strata and gas content; requires geological interpretation.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Scour conditions |
| --- | --- | --- | --- | --- |
| 1. Laser line scanning | Applicable | Not evaluated | Not evaluated | Applicable |
| 2. Structured light and photogrammetry | Applicable | Not evaluated | Not evaluated | Applicable |
| 3. Multibeam bathymetry | Not evaluated | Applicable | Applicable | Restricted |
| 4. Side-scan sonar | Not evaluated | Applicable | Applicable | Restricted |
| 5. Sub-bottom profiler | Not evaluated | Applicable | Applicable | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **terrain and strata measurement** is the "scour condition": sediment transport and bed-morphology evolution are the main applications of this type of measurement in tank tests.

**Route selection:** According to the three criteria of 2.15.1 (the spatial-resolution-coverage combination, whether real-time in-water acquisition or post-draining scanning is required, and water turbidity), the choice among the principles is as follows.

In tanks, laser line scanning, structured light, and photogrammetry are used, with millimetre-level resolution but small coverage, and mostly requiring post-draining measurement; large-area field surveys usually use acoustic methods: multibeam bathymetry gives depth, side-scan gives geomorphological texture, and the sub-bottom profiler gives shallow structure, with large coverage and centimetre-to-metre-level resolution. Scour and deformation research cares about the difference between two measurements, so the positioning consistency between the two measurements is more critical than the absolute accuracy of a single measurement.

#### 2.15.3 Implementation Considerations for the Three Scenarios

**Tank test:** The key of scour and bed-morphology research is the comparison of terrain before, after, and during the test; the effect of sediment conditions (including physical cohesion) on scour-pit development in scour tests is given in Schindler et al. (2016). The conventional practice is to measure the terrain once before, during, and after the test, and to subtract successive measurements at the same position.

Whichever means is used, the terrain data must be related to the conditions at the same instant: water level, sediment concentration, and flow velocity vary with time, and without condition records the bed-morphology change cannot be attributed.

The advantage of structured light and photogrammetry is low equipment cost and rapid full-field data, suitable for comparing terrain obtained from multiple post-draining measurements. Changes in the calibration target, positioning datum, and illumination conditions affect the consistency of the reconstructions of different runs and of their differences.

**Field sea trial:** Multibeam and side-scan are the standard means of seabed survey, often used together: multibeam gives depth and side-scan gives geomorphological texture. Bathymetry requires sound-speed-profile and tide corrections, and the vessel attitude should also be recorded during operations; the accuracy of shallow-water multibeam has a significant dependence on the track configuration and parameter settings (Maleika, 2013).

**Long-term monitoring:** Scour and deformation are obtained by periodic repeat measurement, and the positioning consistency between two measurements is the main error source. A feasible practice is to fix the survey lines, fix the vessel speed, and fix the parameters, and to reprocess the same batch of data with the same processing workflow, so that the difference between two runs comes mainly from the bed itself.

A laser-scanning-based three-dimensional reconstruction method exists for laboratory scour-pit measurement, and can serve as an implementation reference at tank scale (Zhu et al., 2026).

#### 2.15.4 Calibration and Uncertainty

Optical terrain measurement requires calibrating the camera parameters and coordinate system, with refraction correction in water. Acoustic bathymetry requires sound-speed-profile and tide (or water-surface elevation) corrections.

Uncertainty components specific to terrain and geophysical measurement include: positioning inconsistency between two measurements, sound-speed or refraction correction error, water turbidity, changes in the optical characteristics of the bed material, and the track-configuration and attitude-correction residuals of multibeam. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

For difference quantities such as scour pits, the bias of a single measurement partially cancels when the two measurements are subtracted, but the datum change between the two does not cancel and instead enters the difference as a whole; when the difference is mainly affected by positioning-datum and calibration-state changes, merely increasing the single-scan resolution cannot eliminate this part of the error. The test report should give the spatial resolution and elevation uncertainty of the terrain.

#### 2.15.5 Common Errors

- Inconsistent calibration or illumination conditions between different terrain scans, affecting the consistency of the reconstructions and their differences.
- Not correcting refraction for underwater optical measurement.
- Not performing sound-speed-profile and tide corrections for acoustic bathymetry.
- Reporting only the terrain map without reporting the elevation uncertainty.

#### 2.15.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.15.2, with a query date of 2026-10-06: the scanning systems are Amazon UK prices (in pounds sterling including VAT); the line-laser profilometers and multibeam/side-scan are Taobao listings (in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference); the photogrammetry and structure-from-motion software is the Agisoft official-site price (in US dollars), not converted to pounds in this table. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Laser line-scanning terrain instrument | Keen laser profile sensor (material 3D outer-profile scanner) | Line-laser profile | Complete system | ¥13,500 | Taobao 2026-10-06 | 5-year-old store |
| Laser line-scanning terrain instrument | SRI integrated 3D laser profile measuring instrument (3D line-laser camera sensor) | Integrated 3D line laser | Component | ¥600 | Taobao 2026-10-06 | Botu Automation enterprise store; component-level lower bound |
| Structured-light scanning system | Revopoint INSPIRE 2 | 0.03 mm accuracy, outdoor scanning capable | Complete system | £388.00 | Amazon UK 2026-10-06 | Handheld type |
| Structured-light scanning system | Revopoint MetroY Pro | 0.01 mm, blue laser, five scanning modes | Complete system | £1,001.00 | Amazon UK 2026-10-06 | — |
| Photogrammetry and structure-from-motion software | Agisoft Metashape Standard | Single-machine licence | Software | $179 | Agisoft official site 2026-10-06 | Official store price, in US dollars |
| Photogrammetry and structure-from-motion software | Agisoft Metashape Professional | Single-machine licence | Software | $3,499 | Agisoft official site 2026-10-06 | Official store price, in US dollars |
| Multibeam and side-scan system | USV single-beam echosounder / side-scan sonar / multibeam (river-lake-channel underwater terrain survey) | River-lake-channel underwater terrain survey | Complete system | ¥80,000 | Taobao 2026-10-06 | 14-year-old store; complete instrument |
| Multibeam and side-scan system | Underwater sonar multibeam imaging, high-definition side-scan search-and-rescue sonar (7 inch) | 7-inch display, imaging sonar | Complete system | ¥338,418 | Taobao 2026-10-06 | Upper bound of this category |

Main supply channels: SICK, Leica, Faro (laser scanning); Kongsberg, Teledyne, EdgeTech, Klein (acoustic bathymetry and geomorphology); photogrammetry software from ZEISS (GOM Metrology) and Correlated Solutions. Channel websites are given in Appendix C.

### 2.16 Corrosion and Cathodic Protection

#### 2.16.1 Measurement Target and Criteria

The objects of measurement include the structure potential, corrosion rate, coating state, and the working state of sacrificial anodes (anodes that provide protective current through their own corrosion). In tank tests, the main concern is the effect of the salt-water environment on the measuring equipment itself, and the long-term effect of corrosion on the model structure and sensors. In field and long-term monitoring it is used for the effectiveness evaluation of cathodic-protection systems.

These methods differ mainly in the following respects. First, whether the instantaneous potential or the cumulative corrosion amount is measured: the instantaneous potential reflects the current protection state, and the cumulative corrosion amount reflects the historical accumulation, with the two types of quantity corresponding to different principles. Second, whether long-term unattended operation is required, which determines the choice between electrochemical probes and resistance probes — electrochemical probes require calibration and maintenance opportunities, while resistance probes are more suitable for one-shot long-term deployment.

Derived from these quantities are: the distribution and offset of the protection potential, the locations of coating damage and under-protection, the time series of the corrosion rate, and the consumption state of the sacrificial anodes. What is most easily overlooked when interpreting these derived quantities is directly taking the potential drift as a change of the corrosion state, whose time scales are not the same.

#### 2.16.2 Comparison of Principle Routes

The four measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Reference electrode | Contact | Potential of the structure relative to the reference electrode | The structure potential relative to the reference electrode is measured |
| 2. Resistance probe | Contact | Resistance change of the probe element | Metal loss converted from the resistance change |
| 3. Linear polarisation resistance | Contact | Potential-current relationship under small polarisation | Corrosion rate converted from the polarisation resistance |
| 4. Potential-field array | Contact (multi-point) | Potential at each point of the structure surface | Distribution obtained by comparing the potentials of several measurement points |

**1. Reference electrode**

**Working principle:** With a reference electrode of known potential as the datum, the potential of the protected structure relative to it is measured; provided the reference electrode is valid and the IR drop is handled, it can be compared with the applicable protection-potential criterion.

**Typical magnitudes and limitations:** Directly reflects the protection state, fast response, continuously monitorable; the electrode itself drifts, becomes contaminated, or is depleted, requiring periodic checking and replacement in long-term deployment; when there is an IR drop in the circuit (the potential drop caused by the product of current and circuit resistance), the reading deviates from the true polarisation potential.

**Advantages:** Directly gives the protection potential, fast response, continuous recording possible.

**Limitations:** Electrode drift and contamination; rechecking needed in long-term deployment; affected by IR drop.

**2. Resistance probe**

**Working principle:** The probe element is exposed to the medium, and corrosion reduces its cross-sectional area and increases its resistance; the metal loss (often expressed as thickness loss) is converted from the relative change of resistance through the geometric dimensions.

**Typical magnitudes and limitations:** The cumulative metal loss is obtained from the element resistance change, and the corrosion rate is obtained from the loss difference over a period; the time-resolution capability depends on the element thickness, the resistance-measurement accuracy, and the differencing interval.

**Advantages:** Directly gives the cumulative corrosion amount, suitable for long-term unattended deployment.

**Limitations:** The rate is obtained from the loss difference over a period, with the time-resolution capability varying with the element and reading configuration; the accumulation of surface corrosion products brings apparent resistance change.

**3. Linear polarisation resistance**

**Working principle:** A small polarisation (usually ±10 mV) is applied near the corrosion potential, the potential-current relationship is measured to obtain the polarisation resistance Rp, and the instantaneous corrosion rate is converted through the Stern-Geary relationship.

**Typical magnitudes and limitations:** Fast response, suitable for online monitoring; requires assuming the corrosion mechanism (the Stern-Geary coefficients), and is affected by the medium resistivity and flow velocity.

**Advantages:** Fast response, can give the instantaneous corrosion rate, suitable for online monitoring.

**Limitations:** Requires assuming the corrosion mechanism; medium resistivity and flow velocity introduce bias.

**4. Potential-field array**

**Working principle:** Several reference electrodes are arranged on the structure surface to measure the potential of each point synchronously, obtaining the spatial distribution of the protection potential, and thereby locating coating-damage and under-protection regions.

**Typical magnitudes and limitations:** Can locate coating-damage and under-protection regions; many channels, complex wiring, with cost increasing with the number of measurement points.

**Advantages:** Gives the spatial distribution of the potential, can locate local under-protection regions.

**Limitations:** Many channels, complex wiring; requires multi-channel synchronous acquisition.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Long-term unattended conditions |
| --- | --- | --- | --- | --- |
| 1. Reference electrode | Applicable | Applicable | Applicable | Restricted |
| 2. Resistance probe | Not evaluated | Applicable | Applicable | Applicable |
| 3. Linear polarisation resistance | Not evaluated | Applicable | Applicable | Restricted |
| 4. Potential-field array | Not evaluated | Applicable | Applicable | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **corrosion monitoring** is the "long-term unattended condition": the drift of the reference electrode and the limited calibration opportunities of the polarisation-resistance probe are common limits of long-term deployment.

**Route selection:** According to the two criteria of 2.16.1 (instantaneous potential or cumulative corrosion amount, and whether long-term unattended operation is required), the choice among the principles is as follows.

The reference electrode directly gives the protection potential and responds quickly, reflecting the current state, at the cost of the electrode itself drifting and being contaminated, so long-term deployment must allow rechecking; the resistance probe gives the cumulative metal loss, suitable for the long term, with time-resolution capability varying with the probe and the differencing interval; the linear polarisation resistance gives the instantaneous corrosion rate and responds quickly, but requires assuming the corrosion mechanism and is affected by medium conditions; the potential-field array locates coating-damage and under-protection regions with multi-point potentials, with the channel count and wiring being the main costs. For long-term unattended operation, a resistance probe is usually used together with a reference electrode, the former giving the cumulative quantity and the latter the protection state.

#### 2.16.3 Implementation Considerations for the Three Scenarios

**Tank test:** In a salt-water tank, the effect of corrosion and electrochemical polarisation on the measuring equipment is a real problem. Probes, strain gauges, and exposed wires without potential isolation fail more quickly. The potential difference between the measurement system and the model structure can introduce electrochemical noise, affecting small-signal measurement.

Tank tests can also be used to verify the protection process itself. Arranging the same batch of probes in two groups, protected and unprotected, gives the failure time of the two schemes within weeks; the result can be used to select the encapsulation and coating scheme for real sea conditions.

The corrosion-rate data at the tank stage can be obtained through electrochemical measurement under controlled conditions: polarisation curves (curves of current density versus potential) are taken with material, temperature, and flow velocity as variables, and the rates obtained are used for material selection and protection design; field probes are then used to verify that the protection system works as designed. In long-term tests, corrosion and fouling of the model surface change the surface state and thereby affect the resistance measurement; it is advisable to record the surface state before and after the test.

**Field sea trial:** Field potential monitoring is the direct means of judging whether cathodic protection is effective, and the stability of the reference electrode determines the credibility of long-term data (Valland & Eliassen, 1979). The medium temperature and salinity should be recorded during measurement, because they affect the electrode potential and the medium resistance; the IR drop is superimposed on the potential reading, and is particularly significant near the anode measurement points.

**Long-term monitoring:** Long-term schemes usually use a resistance probe together with a reference electrode: the resistance probe gives the cumulative loss and the reference electrode gives the protection state. The design basis of cathodic protection is given in Det Norske Veritas (DNV) RP-B401, and pipeline cathodic protection is further given in the ISO 15589 series. Long-term unattended operation must also handle power and data backhaul, and the problem of the protection-potential distribution changing as the anode is consumed in the later stage.

The initial potential and the initial probe resistance help identify long-term changes; the lack of the initial probe resistance affects the determination of the cumulative metal loss, but the current protection potential can still be compared with the applicable criterion provided the reference electrode is valid and the IR drop is handled (U.S. Army Corps of Engineers, 2021). The measurement-point position also affects the potential record: readings near the anode and near coating damage may differ, and a single point cannot represent the complete potential distribution.

#### 2.16.4 Calibration and Uncertainty

The potential of the reference electrode is determined by comparison with a standard electrode in the same medium, with the comparison also giving the electrode's own drift. The calibration of the resistance probe is based on the geometric dimensions and material resistivity of the element, converting the measured resistance change into metal loss (thickness loss).

Uncertainty components specific to corrosion and cathodic-protection measurement include: reference-electrode drift, the effect of temperature and salinity on the electrode potential, the IR drop caused by the medium resistance, surface fouling and biofilm, the apparent resistance change caused by corrosion-product accumulation on the resistance-probe element surface, and the potential-field change caused by coating ageing. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01).

When converting these components into effects on the protection criterion, the direction should be noted: both the reference-electrode drift and the IR drop make the read potential deviate from the true polarisation potential, and the two cannot be directly distinguished in the data; they can only be estimated separately through before-and-after-deployment electrode checks and off-potential measurement (the potential measured at the instant the protection current is interrupted) (Brenna et al., 2012).

#### 2.16.5 Common Errors

- Not insulating underwater electrical junctions in a salt-water tank.
- Not rechecking the reference electrode in long-term deployment.
- Taking the potential drift caused by surface fouling as a change of the corrosion state.
- Ignoring the effect of corrosion on the model surface roughness and the resistance measurement.

#### 2.16.6 Models, Specifications, Prices, and Supply Channels

The table below lists the published prices of products corresponding to the principles in 2.16.2, with a query date of 2026-10-06: Amazon UK entries are in pounds sterling including VAT, and Taobao entries are in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference. The reference electrodes are small electrodes for laboratory electrolytic cells, not on the same tier as field electrodes for seawater cathodic protection; linear polarisation resistance probes have no published price and require manufacturer quotation. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Reference electrode | stonylab Ag/AgCl reference electrode | 6×65 mm, neutral electrolyte | Component | £69.99 | Amazon UK 2026-10-06 | Laboratory grade |
| Reference electrode | CHI111 Ag/AgCl reference electrode | 78 mm, ceramic frit | Component | £39.81 | Amazon UK 2026-10-06 | Laboratory grade |
| Resistance probe | Resistance-probe corrosion monitor (uniform corrosion-rate measurement for refinery pipeline heat exchangers) | Uniform corrosion-rate measurement | Complete system | ¥25,400 | Taobao 2026-10-06 | — |
| Resistance probe | Resistance-probe corrosion monitor (high-resolution continuous monitoring of oil-water-gas corrosion in multiphase systems) | Continuous multiphase-system monitoring | Complete system | ¥27,600 | Taobao 2026-10-06 | Upper bound of this category |
| Linear polarisation resistance probe | — | — | Component | Quotation required | Manufacturer quotation | Manufacturer quotation required |
| Potential-monitoring and data-acquisition system | Pico Technology PicoLog 1012 | 12-bit resolution, multi-channel, with terminal board | Laboratory grade | £190.80 | Amazon UK 2026-10-06 | Acquisition accessory; reference electrode and matching front end separately configured |
| Potential-monitoring and data-acquisition system | Pico Technology PicoLog 1216 | 16 channels, with terminal board | Laboratory grade | £270.00 | Amazon UK 2026-10-06 | Acquisition accessory; reference electrode and matching front end separately configured |

Main supply channels: Rohrback Cosasco, Corr Instruments (CMAS probes), and AMAC Corrosion (AMAC Group) provide corrosion-monitoring equipment; reference electrodes can come from professional suppliers recognised by classification societies. Channel websites are given in Appendix C.

### 2.17 Distributed Fibre-Optic Sensing

#### 2.17.1 Measurement Target and Criteria

Distributed fibre-optic sensing measures the strain, temperature, or acoustic-vibration signal continuously distributed along the fibre length. It is not a single sensor but a set of principles that turn the entire fibre into a dense sensing array.

Distributed fibre-optic methods involve trade-offs among measurement distance, spatial response, and update rate. Some strain systems are referenced to an initial state, while temperature systems can output absolute temperature after calibration; whether temperature and strain are cross-sensitive and what compensation approach is adopted depend on the scattering route and arrangement (Hartog, 2017; Silixa, n.d.).

Distributed records can give temperature and strain profiles, the position and intensity of acoustic-vibration events, and can be used to identify leakage, seepage channels, or structural activity. The event-localisation capability along the fibre is affected by the system spatial-response scale, gauge pitch, signal-to-noise ratio, and cable-laying geometry; the time sampling rate describes the event variation with time. The gauge pitch describes the spacing of output positions, the effective gauge length describes the average length of the strain response, and the spatial resolution describes the capability to distinguish adjacent variations (Silixa, n.d.; Luna Innovations, n.d.).

Distributed fibre optics and fibre Bragg gratings both belong to the fibre-optic class, but differ in measurement object and implementation: fibre Bragg gratings are point-type or serial multi-point measurement, given in 2.7 Strain and Deformation; for the distributed principle continuously distributed along the entire fibre, the comparison of the two is given in 2.7.2 and 2.17.2.

#### 2.17.2 Comparison of Principle Routes

The three measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Distributed temperature sensing | Contact (fibre) | Raman or Brillouin scattered light | Temperature converted from the scattered signal |
| 2. Distributed strain sensing | Contact (fibre) | Brillouin frequency shift or Rayleigh-scattering spectral shift | Strain converted from the scattering change, with the temperature effect handled |
| 3. Distributed acoustic sensing | Contact (fibre) | Phase change of Rayleigh scattering | Acoustic-vibration signal converted from the phase change |

**1. Distributed temperature sensing**

**Working principle:** Optical time-domain or coherent reflectometry reads the Raman and Brillouin scattering (two classes of scattering in the fibre that vary with temperature or strain) signals along the fibre to obtain the along-length temperature distribution.

**Typical magnitudes and limitations:** Long-range systems have metre-level spatial resolution and measurement distances up to tens of kilometres; relatively slow response, with a single measurement taking seconds to tens of seconds.

**Advantages:** Mature, suitable for leakage and seepage monitoring.

**Limitations:** Slow response; measures temperature only.

**2. Distributed strain sensing**

**Working principle:** Distributed strain can be obtained from the Brillouin frequency shift or the Rayleigh-scattering spectral shift; both strain routes are affected by temperature, and the along-length strain must be interpreted in combination with reference conditions or compensation arrangements (Hartog, 2017; Luna Innovations, n.d.).

**Typical magnitudes and limitations:** Taking the Luna ODiSI 6000 Rayleigh-scattering system as an example, the minimum gauge pitch (the centre-to-centre spacing of adjacent measurement sections) is 0.65 mm, with a strain range of ±15 000 µε; the independently resolvable spatial scale also depends on the system spatial response (Luna Innovations, n.d.). Long-range Brillouin systems can cover tens of kilometres, with a spatial response usually at the metre level (Hartog, 2017).

**Advantages:** Continuous strain measurement, suitable for structural-deformation monitoring.

**Limitations:** Short measurement distance of high-density Rayleigh systems; strain measurement requires handling the temperature effect.

**3. Distributed acoustic sensing**

**Working principle:** The phase of Rayleigh scattering varies with the local length change of the fibre, and demodulating section by section gives the acoustic-vibration signal along the fibre, equivalent to turning the entire fibre into a dense acoustic array.

**Typical magnitudes and limitations:** The spatial response is usually at the metre level, with the gauge pitch and effective gauge length along the fibre depending on the equipment configuration; the data of several dense channels may have overlapping spatial responses, with large data volume and complex interpretation (Silixa, 2026; Silixa, n.d.).

**Advantages:** Equivalent to a dense acoustic array, usable for inverting waves and ground or structural activity.

**Limitations:** Extremely large data volume; complex interpretation.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Long-distance coverage conditions |
| --- | --- | --- | --- | --- |
| 1. Distributed temperature sensing | Restricted | Applicable | Applicable | Applicable |
| 2. Distributed strain sensing | Restricted | Applicable | Applicable | Applicable for long-range systems; restricted for high-density short-range systems |
| 3. Distributed acoustic sensing | Restricted | Applicable | Applicable | Applicable |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. Long-range systems emphasise along-line coverage, and short-range high-density systems emphasise dense spatial sampling; the capability at model scale depends on the gauge pitch, effective gauge length, and update rate of the specific system.

**Route selection:** The measurement distance, spatial response, update rate, and reference state jointly affect the applicable range of the system, and the scattering route determines the target quantity and the way of handling the temperature effect.

Distance, spatial response, and update rate constrain one another: long-range systems are suitable for along-line temperature and strain monitoring, and short-range high-density systems can provide denser strain measurement points. Raman DTS can output absolute temperature after calibration, and its temperature reading is not directly affected by strain; Brillouin and Rayleigh strain measurement require separating temperature and strain. The phase output, effective gauge length, and temperature-drift handling of DAS vary with the system and the frequency band of interest, and the data volume of acoustic-vibration records is usually large (Silixa, n.d.; Luna Innovations, n.d.).

#### 2.17.3 Implementation Considerations for the Three Scenarios

**Tank test:** The metre-level spatial response of a long-range system may not match the small model scale; short-range high-density Rayleigh systems can be used for along-length strain measurement on models. The fibre can also be embedded in larger-scale specimens for evaluating the strain transfer, packaging, and installation process (Luna Innovations, n.d.).

Another advantage of tank tests is the ability to perform repeated loading and failure tests: bonding or embedding the fibre onto specimens under controlled conditions and loading step by step until failure can directly calibrate the strain-transfer efficiency and the pre-failure signal-to-noise ratio, both of which are difficult to measure under equally controlled conditions in the field.

**Field sea trial:** The advantage of fibre sensing in the field is covering a large spatial range in one deployment, reducing the number of devices. Distributed measurement of submarine cables and pipelines is the main application direction, and the interrogation equipment needs power and protection on board a ship or platform, so the actual limitation of field operations often comes from the interrogation equipment rather than the optical cable itself.

**Long-term monitoring:** This is the main applicable scenario of distributed fibre optics. The passive, corrosion-resistant, and electromagnetic-interference-immune nature of the sensing fibre favours long-term along-line deployment, while the interrogation and recording equipment still requires power. The acoustic response of submarine cables can be used to invert waves and ground or ship activity, with the methods in Marra et al. (2018) and Lindsey and Martin (2021).

The feasibility of long-term deployment also depends on the durability of the optical cable itself: the cable must serve both sensing and protection functions, and the ageing of the packaging layer, hydrogen loss (loss increase caused by hydrogen molecules entering the fibre), and mechanical fatigue over long periods all change the loss and hence the usable measurement distance; an acceptable loss budget should be given before deployment.

The three distributed principles differ greatly in their data-infrastructure requirements: temperature and strain are low-frequency profile quantities with controllable data volume; acoustics is a broadband waveform quantity with raw data rates up to hundreds of megabytes per second, usually retaining the raw waveform only under trigger conditions and storing only feature quantities in the remaining periods.

#### 2.17.4 Calibration and Uncertainty

The reference state and calibration method of the output vary with the scattering route: some strain systems are referenced to an initial state, and temperature systems can output absolute temperature after calibration; the way of separating temperature and strain also depends on the specific system and arrangement. Known strain, temperature, or reference fibres can be used to check the corresponding demodulation response (Silixa, n.d.; Luna Innovations, n.d.).

Uncertainty components specific to distributed fibre-optic measurement include: the averaging effect brought by the effective gauge length and spatial response, the temperature cross-sensitivity in the strain route, the strain-transfer efficiency between the fibre and the measured structure, the wavelength calibration and drift of the interrogation equipment, and the signal-to-noise-ratio degradation caused by cable-loss change with ageing. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01); calibration and traceability can be performed according to ISO/IEC 17025.

Distributed strain usually has a certain effective gauge length and spatially averaged response. When comparing with finite-element results, quantities at similar averaging scales are easier to compare; directly using node point values introduces spatial-scale differences, and the comparison result depends on the averaging and mapping approach adopted.

#### 2.17.5 Common Errors

- Using a distributed measurement as a point measurement.
- Not separating the temperature and strain effects in a cross-sensitive route.
- Not evaluating the strain-transfer efficiency between the fibre and the measured structure.
- Performing point-by-point comparison without matching the spatial resolution to the numerical-grid scale.

#### 2.17.6 Models, Specifications, Prices, and Supply Channels

The table below lists the products and published prices corresponding to the principles in 2.17.2, with a query date of 2026-10-06: the sensing optical cable is an Amazon UK price (pounds sterling including VAT, priced by a pack of 10 × 1 m, with a 3 m × 10 pack at £152.47 on the same page); the distributed-temperature and acoustic interrogation systems are Taobao complete-instrument listings (in renminbi, being industrial-control trader listings with many negotiable items, given only as an order-of-magnitude reference), among which the distributed-temperature interrogator is the same model as in 2.10.6; the distributed-strain interrogation system has no published price and requires manufacturer quotation. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Distributed-temperature interrogation system | Beijing Naijiu Weiye DAS/DTS distributed fibre-optic interrogator | Distributed fibre-optic interrogation | Complete system | ¥49,999 | Taobao 2026-10-06 | Beijing, 7-year-old store; same model as in 2.10.6 |
| Distributed-strain interrogation system | — | — | Complete system | Quotation required | Manufacturer quotation | Manufacturer quotation required |
| Distributed-acoustic interrogation system | High-accuracy DAS distributed fibre-optic acoustic-wave monitoring host | Distributed fibre-optic acoustic-wave monitoring | Complete system | ¥450,000 | Taobao 2026-10-06 | Wuhan, Hubei, Ligong Fibre |
| Sensing optical cable | Armoured multimode distributed temperature-sensing cable | A62.5/125 µm, 1 m × 10 per pack | Component | £119.94 | Amazon UK 2026-10-06 | This row is the sensing cable, the interrogator is not in this row's price and requires separate quotation; 3 m × 10 pack at £152.47 on the same page |

Main supply channels: Silixa, AP Sensing, Luna, OptaSense, Febus Optics, HBK. Channel websites are given in Appendix C.

### 2.18 Optical and Image-Based Measurement

#### 2.18.1 Measurement Target and Criteria

The objects of optical measurement include free-surface morphology, flow-field velocity, structural deformation, cavitation and bubble morphology, and model attitude. It is one of the means capable of providing full-field spatial information and temporal evolution simultaneously, and is therefore used for both mechanism research and numerical validation.

These methods differ mainly in the following respects. First, the combination of spatial resolution, temporal resolution, and field of view, with the field of view often requiring a concession in resolution. Second, whether underwater operation is required, which determines the refraction correction and protection approach. Third, whether the measurement object is a continuous free surface, discrete tracer particles, or a transient phase interface, which determines the choice of principle.

Quantities derived from optical measurement include: the full-field velocity field and vorticity, free-surface elevation and slope, structural displacement field and strain field, the size distribution of cavitation and bubbles, and attitude angles. These derived quantities depend on the post-processing parameters far more than ordinary point measurement: the interrogation window, subset size, and smoothing method themselves constitute a spatial filtering, and different parameters give different derived quantities.

#### 2.18.2 Comparison of Principle Routes

The five measurement principles covered in this section are shown in the table below.

| Principle | Measurement method | Directly measured quantity | How the target quantity is obtained |
| --- | --- | --- | --- |
| 1. Particle image velocimetry (PIV) | Non-contact (requires light transmission and seeding) | Displacement of particle image pairs | Velocity converted from displacement and time interval |
| 2. Digital image correlation (DIC) | Non-contact (requires a surface pattern) | Displacement of image subsets | Strain converted from the displacement field |
| 3. Stereo-vision free-surface reconstruction | Non-contact | Disparity of multi-camera images | Wave-surface elevation reconstructed from the disparity |
| 4. High-speed imaging | Non-contact | Transient image sequences | Image sequences recorded, with geometric or kinematic quantities extracted separately through calibration and image processing |
| 5. Laser Doppler velocimetry (LDV) | Non-contact | Frequency shift of light scattered by tracer particles | Velocity component converted from the frequency shift |

Optical motion capture of six-degree-of-freedom pose (including Qualisys and other models) is given in Principle 1 of 2.5.2.

**1. Particle image velocimetry (PIV)**

**Working principle:** A camera records image pairs of tracer particles, and the velocity field is converted from the displacement of the image pairs and the known time interval (Adrian, 1991); the measurement principle of the velocity quantity is given in Principle 4 of 2.4.2.

**Typical magnitudes and limitations:** Full-field measurement, with spatial resolution depending on the camera, lens, and field of view; resolution, field of view, and temporal resolution constrain one another (ITTC 2024, 7.5-02-01-04, §5.6).

**Advantages:** Gives full-field instantaneous structure and can be extended to stereo and volumetric measurement (Raffel et al., 2007); for uncertainty evaluation see Sciacchitano (2019), and for an open-source implementation see Thielicke and Stamhuis (2014).

**Limitations:** For the calibration and tracer-particle management requirements see the ITTC PIV/SPIV guide (ITTC 2024, 7.5-02-01-04, §5.6 and §7); for PIV under breaking-wave conditions see Chang and Liu (1997).

**2. Digital image correlation (DIC)**

**Working principle:** A speckle pattern is prepared on the specimen surface, subset correlation is performed on the pre- and post-deformation images (the image is divided into small blocks, the most similar region is searched block by block in the deformed image, and the displacement field is obtained from the matched displacement), and the strain is obtained from the displacement field; the measurement principle of the strain quantity is given in 2.7.2.

**Typical magnitudes and limitations:** The spatial resolution depends on the subset size and the camera resolution: the smaller the subset, the higher the spatial resolution, but the noise increases accordingly, and a compromise is needed.

**Advantages:** Non-contact full-field measurement, suitable for thin shells and composites.

**Limitations:** Requires pattern preparation; refraction correction needed for underwater use.

**3. Stereo-vision free-surface reconstruction**

**Working principle:** Several cameras image the water surface from different viewpoints, and through calibration and matching the wave-surface elevation is reconstructed from the disparity (the positional difference of the same object point in the images of two cameras); the measurement principle of the wave-surface elevation is given in Principle 5 of 2.1.2.

**Typical magnitudes and limitations:** The reconstructable spatial range and resolution depend on the camera arrangement and baseline: the longer the baseline, the higher the depth-resolution capability, but the more difficult the matching and calibration.

**Advantages:** Full-field and non-contact (Benetazzo et al., 2012), can capture breaking wave surfaces (Wang et al., 2025); multi-camera stereo configurations have been used for wave-surface reconstruction in tanks (Wang et al., 2019).

**Limitations:** Complex calibration, affected by foam and spray.

**4. High-speed imaging**

**Working principle:** Transient processes are recorded at high frame rates, directly giving the spatiotemporal morphology of cavitation, breaking, and slamming.

**Typical magnitudes and limitations:** At full-frame 1024 × 1024 pixels, frame rates of 2000/4000/6400 fps can be chosen (corresponding to three models), and after reducing the resolution the maximum frame rate can reach 1.7×10⁵ to 2.1×10⁵ fps; frame rate, resolution, and recording duration constrain one another (Photron, 2026).

**Advantages:** Directly observes transient processes such as cavitation, breaking, and slamming, and is the main morphological means apart from acoustic measurement.

**Limitations:** High storage and illumination requirements, short continuous-recording time.

**5. Laser Doppler velocimetry (LDV)**

**Working principle:** Two coherent beams form interference fringes in the measurement volume; as tracer particles pass through, a time-varying scattered-light signal is produced, and the velocity component is obtained from the fluctuation frequency and the fringe spacing; the velocity-measurement principle is given in Principle 3 of 2.4.2 (Dantec Dynamics, n.d.).

**Typical magnitudes and limitations:** Single-point measurement, with a measurement volume of sub-millimetre to millimetre level and high temporal resolution; requires light transmission and tracer particles.

**Advantages:** No disturbance, high temporal resolution, suitable for turbulence-spectrum measurement.

**Limitations:** Requires light transmission and tracer particles, single-point measurement, time-consuming optical alignment.

**Applicability of scenarios and instruments**

| Instrument | Tank test | Field sea trial | Long-term monitoring | Breaking and aerated conditions |
| --- | --- | --- | --- | --- |
| 1. Particle image velocimetry (PIV) | Applicable | Restricted | Restricted | Restricted |
| 2. Digital image correlation (DIC) | Applicable | Restricted | Restricted | Not evaluated |
| 3. Stereo-vision free-surface reconstruction | Applicable | Applicable | Restricted | Restricted |
| 4. High-speed imaging | Applicable | Restricted | Restricted | Applicable |
| 5. Laser Doppler velocimetry (LDV) | Applicable | Restricted | Restricted | Restricted |

"Not evaluated" means that this section does not cover the combination, not that it is inapplicable. The restricted condition for **optical measurement** is the "breaking and aerated condition", with the usability of each means under this condition given in the last column of the table.

**Route selection:** According to the three criteria of 2.18.1 (the spatial-resolution-temporal-resolution-field-of-view combination; whether underwater operation is required; and whether the measurement object is a continuous free surface, discrete tracer particles, or a transient phase interface), the choice among the principles is as follows.

PIV and DIC give full-field distributions and require tracer particles or a speckle pattern; LDV is suitable for single-point high-temporal-resolution measurement; stereo vision is used for free-surface reconstruction, and high-speed imaging for recording transient morphology. Spatial resolution, temporal resolution, and field of view constrain one another, and raising one of them usually requires sacrificing the other two. Breaking and aeration are the main restricted conditions of optical measurement: bubbles simultaneously disrupt optical imaging and particle matching, and foam and spray occlude the free surface.

#### 2.18.3 Implementation Considerations for the Three Scenarios

**Tank test:** Optical measurement in the main towing tank is limited by the tank walls and water quality; the optical windows of the compact wave tank and the stereo-PIV configuration of the fully turbulent flow flume are respectively optimised for the free surface and near-wall flow.

The core problem of underwater imaging is water-surface refraction and water-body attenuation. Refraction changes the optical path and field of view, and attenuation and scattering reduce the image contrast; the camera calibration must be completed in the actual medium and under the actual water-surface conditions.

Illumination is an investment as important as the camera. Underwater high-speed imaging requires sufficient illuminance, and stroboscopic illumination can shorten the effective exposure time and suppress motion blur; the illumination arrangement should also avoid producing bubbles or thermal convection in the measurement region.

**Field sea trial:** Optical methods face continuous challenges of biofouling, turbidity, and illumination in the field, usually requiring antifouling windows or mechanical cleaning devices.

**Long-term monitoring:** In long-term deployment, the optical window and illumination conditions need to be maintained over the long term: window fouling, turbidity change, and illumination decay degrade image quality simultaneously, unless an active cleaning system is equipped. Periodic cleaning and image-quality checks in the calibrated state help identify the response changes before and after maintenance.

A compromise of optical methods in long-term monitoring is to record only under trigger conditions: using low-cost turbidity or acceleration channels as the trigger source and starting high-speed imaging only when an event of interest occurs, which controls the data volume and reduces the continuous burden on illumination and storage.

#### 2.18.4 Calibration and Uncertainty

Camera calibration includes the intrinsic parameters, distortion coefficients, and extrinsic parameters; multi-camera systems also require calibrating the relative positions among the cameras. For underwater use, the refraction of the three media — air, glass window, and water — must enter the calibration model, and ignoring this introduces a systematic bias.

Uncertainty components specific to optical measurement include: the residual of the refraction model, the camera-calibration residual, the quality of the tracer particles or pattern, the motion blur caused by insufficient illumination, the choice of image post-processing parameters, and the time-synchronisation error of a multi-camera system. The general framework is given in the ITTC experimental-hydrodynamics uncertainty guide (ITTC 2014, 7.5-02-01-01); for PIV uncertainty evaluation see Sciacchitano (2019).

Synchronisation error is amplified in stereo and multi-camera schemes: if the exposure instants of different cameras deviate, the disparity matching gives a water surface or flow field that is not of the same instant, and the error grows linearly with the measured motion speed, with the actual time delay and exposure duration respectively affecting the asynchrony error and the motion blur. The image post-processing parameters should be recorded together with the filtering scale of the numerical results.

#### 2.18.5 Common Errors

- Completing the camera calibration in air while the test is carried out in water.
- Insufficient illumination causing motion blur to be taken as flow features.
- Not reporting the image post-processing parameters.
- Directly comparing full-field optical data with numerical results point by point without considering the spatial-filtering scale.

#### 2.18.6 Models, Specifications, Prices, and Supply Channels

The table below lists the laboratory-grade equipment and accessories corresponding to the principles in 2.18.2, with a query date of 2026-10-06, all sourced from Amazon UK product pages, with prices in pounds sterling including VAT. The high-speed cameras in the table are USB industrial-grade models, with frame rates achieved at reduced resolution; the astronomical CMOS camera row is an entry-level planetary camera, not on the same tier as laboratory-grade high-speed cameras from Photron and Teledyne, and prices at different tiers cannot be compared directly; laboratory-grade high-speed cameras have no published price and require quotation. The prices and channels on this page were checked on 2026-10-06.

| Category | Model or product name | Key parameters | Product tier | Price | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| High-speed camera | ELP 640fps USB camera | 640 fps, monochrome, global shutter, 2.8–12 mm manual zoom | Industrial component | £54.40 | Amazon UK 2026-10-06 | Frame rate achieved at low resolution |
| High-speed camera | Svpro USB 3.0 global-shutter camera | 1200P@120 fps, 720P@200 fps, 5–50 mm lens | Industrial component | £126.99 | Amazon UK 2026-10-06 | — |
| Astronomical CMOS camera | ZWO ASI662MC | 2.1 MP, USB 3.0, colour | Component | £215.00 | Amazon UK 2026-10-06 | Entry-level planetary camera, rolling shutter (ZWO, n.d.) |
| Underwater camera and waterproof pressure housing | Underwater waterproof camera housing (for A7R3 28–70 mm) | DSLR body housing | Complete system | £446.26 | Amazon UK 2026-10-06 | Pressure rating varies with the model |
| Underwater camera and waterproof pressure housing | FitStill 60 m waterproof case | For action cameras | Component | £16.99 | Amazon UK 2026-10-06 | — |
| Illumination system | NEEWER 13-inch LED panel light | Dual colour temperature, with tripod, dimmable | Industrial component | £72.99 | Amazon UK 2026-10-06 | Continuous light source |
| Illumination system | NEEWER BASICS BP66 dual-light kit | Dual colour temperature, two lights | Industrial component | £33.99 | Amazon UK 2026-10-06 | — |
| Image acquisition and high-speed storage | Lexar EQ790 2 TB NVMe SSD | M.2 2280, PCIe Gen4 | Component | £246.99 | Amazon UK 2026-10-06 | — |
| Image acquisition and high-speed storage | Elgato 4K X capture card | HDMI 2.1, 4K144 capture | Component | £229.99 | Amazon UK 2026-10-06 | Consumer-grade capture card |

Main supply channels: Photron, Vision Research, iX Cameras, Teledyne Photometrics (high-speed and scientific cameras); LaVision, Dantec, TSI (complete optical measurement systems); Aquatica, SubC (underwater protection). Channel websites are given in Appendix C.

## Part 3 Data Acquisition Systems and Sensor Interfaces

### 3.1 Types of Acquisition System

#### 3.1.1 Modular Chassis-Based Acquisition

**Principle and composition:** Modular chassis-based acquisition consists of a chassis with a backplane, replaceable plug-in modules, and host-computer software. The backplane provides the modules with common power, clock, and triggering; the modules are divided by signal type into voltage, current, strain bridge, IEPE, charge, encoder-pulse, and bus-digital, etc. Different modules can be mixed in the same chassis, and the sampled data are recorded by the same software.

**Applicable sensors and scenarios:** Suitable for laboratory multi-physical-quantity parallel measurement, especially when sensors of different output types such as force, pressure, displacement, vibration, and temperature are connected simultaneously in the same test. The channel count can be expanded by module, suitable for model tests with concentrated measurement points and a need for a common time base.

**Advantages:** Flexible module selection, with one chassis covering multiple signal types; backplane synchronisation gives smaller inter-channel time delay; concentrated wiring and power supply, convenient for test-site management.

**Limitations:** The channel upper limit is determined by the chassis slots and module count; the cost of the chassis and modules is relatively high; the sampling rate available per channel depends on the selected module, and the chassis's nominal maximum sampling rate cannot be treated as the sampling rate simultaneously available to all channels.

**Representative manufacturers:** National Instruments (PXI, CompactDAQ), HBK, Dewesoft, imc Test & Measurement.

#### 3.1.2 High-Accuracy Synchronous Acquisition and Strain-Bridge-Specific Systems

**Principle and composition:** This type of system provides strain gauges, force-measuring elements, and torque sensors with stable bridge excitation, low-noise differential amplification, bridge compensation, and multi-channel synchronous sampling. Some systems have built-in bridge-completion resistors and can directly accept quarter-bridge, half-bridge, or full-bridge connections; the sampling clock is distributed by the same backplane or chassis.

**Applicable sensors and scenarios:** Suitable for strain arrays, six-component balances, single-component force-measuring elements, torque sensors, and multi-component load measurement. When load decomposition, phase comparison, or static and low-frequency load recording is required, synchronous sampling is more reliable than channel-by-channel independent acquisition.

**Advantages:** Stable bridge excitation, low noise, good channel synchronisation; suitable for static and low-frequency measurement; the supporting software usually provides bridge configuration, calibration coefficients, and load conversion.

**Limitations:** Limited channel count per unit and high per-channel cost; usually covers only a few signal types such as strain bridges, and additional modules are needed for IEPE, charge, or bus-digital sensors; the bridge connection and temperature compensation still need item-by-item confirmation.

**Representative manufacturers:** HBK, Dewesoft, imc Test & Measurement, National Instruments.

#### 3.1.3 Integrated Acoustic and Vibration Test Systems

**Principle and composition:** Integrated acoustic and vibration test systems integrate the dedicated front end, acquisition hardware, and analysis software on one platform. The front end usually provides IEPE constant-current sources, charge inputs, and impact-hammer and exciter interfaces; the software provides FFT, one-third-octave, modal analysis, and transfer-function estimation.

**Applicable sensors and scenarios:** Suitable for hydrophones, accelerometers, impact hammers, exciters, and dynamic pressure sensors; common scenarios include structural vibration, modal testing, noise measurement, transfer functions, and acoustic directivity measurement.

**Advantages:** Channel synchronisation and spectral analysis require no additional development; mature software functions; usually relatively complete support for IEPE and charge-type sensors.

**Limitations:** The sensor types are bound to the manufacturer ecosystem, and channel expansion and custom processing are less flexible than a modular chassis; dedicated software licences and channel count can significantly affect the price.

**Representative manufacturers:** Brüel & Kjær, Kistler, Dewesoft.

#### 3.1.4 Embedded and Self-Contained Recorders

**Principle and composition:** Embedded and self-contained recorders integrate acquisition, power, storage, and communication in one independent housing. The device is usually battery powered, recording continuously at a preset sampling rate or on trigger conditions, and exporting data through USB, Ethernet, or a memory card after recovery.

**Applicable sensors and scenarios:** Suitable for field sea trials, long-term deployment, and underwater fixed observation; common inputs include analogue voltage, 4–20 mA, RS-485/Modbus, and manufacturer-specific digital interfaces. CTD, pressure, wave, and water-quality sensors are often paired with this type of recorder.

**Advantages:** Independent deployment, low power consumption, no need for a continuously connected computer; suitable for unattended measurement points far from the laboratory.

**Limitations:** Limited sampling rate, channel count, and real-time processing capability; storage capacity and battery life determine the recording duration; all data can only be obtained after recovery; long-term deployment must also consider biofouling, calibration drift, and waterproof sealing.

**Representative manufacturers:** RBR, Sea-Bird Scientific, Valeport, Nortek, Campbell Scientific.

#### 3.1.5 High-Speed Imaging Acquisition Systems

**Principle and composition:** High-speed imaging acquisition consists of a high-frame-rate camera, high-speed storage, strong illumination, and synchronous triggering. The camera records transient processes within a very short exposure time, and the image sequences are transferred to high-speed storage; several cameras can be synchronised by hardware triggering.

**Applicable sensors and scenarios:** Suitable for processes such as cavitation, breaking waves, slamming, bubbles, spray, and transient structural deformation; often synchronised with pressure, force, acceleration, or motion-capture data to relate morphological change to loads or motion.

**Advantages:** Directly gives transient morphology and spatiotemporal evolution; high frame rate, suitable for capturing millisecond-level or even shorter events; can be combined with image processing to extract bubble size, wave-surface shape, and structural displacement.

**Limitations:** Spatial resolution, frame rate, and recording duration constrain one another; very short recording time at high frame rate; large storage bandwidth, illumination heat, and data volume; time-consuming image post-processing.

**Representative manufacturers:** Photron, Vision Research (Phantom), iX Cameras.

#### 3.1.6 Real-Time Control and Closed-Loop Acquisition Systems

**Principle and composition:** Real-time control and closed-loop acquisition systems consist of a real-time CPU, FPGA (field-programmable gate array), or a dedicated controller, emphasising deterministic sampling, low-latency output, and real-time computation. The measurement data can directly drive the actuator within the same controller, forming a closed loop.

**Applicable sensors and scenarios:** Suitable for motion control, active control, hardware-in-the-loop (connecting a real controller into the simulation loop), and tests requiring real-time actuation from the measurement result; also used for rotating-machinery and structural-control tests requiring strictly periodic sampling.

**Advantages:** Good time determinism, predictable sampling and control periods; input and output can realise a measurement-control closed loop; suitable for tests requiring low-latency response.

**Limitations:** High programming and commissioning threshold, long development cycle; high cost of hardware and real-time software; the sensor interface, driver, and real-time system are often bound to the manufacturer, with a large changeover cost.

**Representative manufacturers:** National Instruments (PXI), Speedgoat, dSPACE-type real-time platforms.

#### 3.1.7 Bus-Based and Distributed Acquisition

**Principle and composition:** Bus-based and distributed acquisition connects several acquisition nodes through field buses (serial communication protocols between devices) such as EtherCAT, CAN, Modbus, RS-485, or Ethernet. The nodes can be arranged close to the sensors and send back only digital data to the host, reducing long-distance analogue wiring.

**Applicable sensors and scenarios:** Suitable for dispersed measurement points, long cables, or remotely arranged applications, for example multi-point pressure on large models, dispersed strain measurement points, and meteorological and hydrological sensors on field platforms.

**Advantages:** Reduces long-distance analogue wiring; nodes can be expanded by measurement point; digital transmission has relatively strong anti-interference; convenient for connecting devices at different locations into the same recording system.

**Limitations:** Protocol latency, clock synchronisation, and compatibility between devices from different manufacturers need separate checking; the time-stamp source must be explicit; the bus bandwidth and node count limit the total sampling capability.

**Representative manufacturers:** National Instruments, Campbell Scientific, and industrial acquisition manufacturers using EtherCAT/CAN/Modbus.

#### 3.1.8 Dedicated Demodulation and Array Acquisition Systems

**Principle and composition:** Dedicated demodulation and array acquisition systems work with specific sensors, with the demodulation (the process of recovering the measured quantity from a modulated signal) and array acquisition completed by manufacturer hardware and software. Typical objects include fibre Bragg gratings, distributed temperature/strain/acoustic interrogators, hydrophone-array acquisition units, and multi-channel pressure scanners.

**Applicable sensors and scenarios:** Suitable for distributed fibre optics, fibre Bragg gratings, hydrophone arrays, pressure scanners, and array measurement requiring high channel density; commonly used in long-structure strain, temperature profiles, sound-source localisation, and model surface-pressure fields.

**Advantages:** Strongly targeted, with the manufacturer usually having integrated the excitation, demodulation, calibration, and data interface; high channel density; dedicated algorithms can directly give wavelength, frequency shift, sound pressure, or pressure distribution.

**Limitations:** The equipment and software are bound to the manufacturer, and the data format is proprietary; cross-manufacturer combination requires additional conversion; high-channel-density systems have both high price and high data volume; when the demodulation algorithm and calibration method are opaque, the results are difficult to recheck.

**Representative manufacturers:** Silixa, Luna, AP Sensing, Brüel & Kjær, Teledyne Reson, Scanivalve, TE Connectivity.

The KHL main tank currently has a PC-based modular acquisition and control system, with up to 64 inputs, 20 outputs, and a sampling rate of up to 60 kHz (University of Strathclyde, n.d.). The module types, per-channel sampling rates, and chassis synchronisation approach further limit the actually usable channel count.

### 3.2 Signal Types and Conditioning

#### 3.2.1 Piezoelectric Constant-Current Type (IEPE)

**Signal characteristics and principle:** IEPE (integrated electronics piezoelectric) sensors package the piezoelectric element and the preamplifier together, with the acquisition system providing a constant current, and the signal output through AC coupling (passing only the alternating component and blocking the DC component). The charge-to-low-impedance-voltage conversion is completed inside the sensor, which can be connected to an acquisition channel with the corresponding constant-current excitation and coupling function (PCB Piezotronics, n.d.-d).

**Typical sensors:** IEPE accelerometers, IEPE pressure sensors, and some IEPE force sensors; commonly used for vibration, shock, dynamic pressure, and structural-response measurement.

**Advantages:** Relatively low noise even with longer cables; simple installation and wiring; the built-in preamplifier reduces the dependence on an external charge amplifier.

**Limitations:** Can measure only the AC component, with the low-frequency response limited by the coupling time constant; cable capacitance and length affect the high-frequency response; requires constant-current excitation, and an additional conditioner is needed when connecting to an unsupported acquisition system.

**Interface parameters:** The constant-current value, coupling mode, cable capacitance and length, sensitivity, and filter settings jointly affect the input matching and frequency response; the coupling time constant particularly affects low-frequency signals.

#### 3.2.2 Strain Bridge

**Signal characteristics and principle:** The strain bridge connects strain gauges into a Wheatstone bridge (a circuit that measures the small resistance change of a bridge arm using an excitation voltage), with the acquisition system providing stable excitation; the millivolt-level differential voltage (the voltage difference between the two output terminals) output by the bridge is amplified and then converted to strain or load. The bridge can be full-bridge, half-bridge, or quarter-bridge.

**Typical sensors:** Strain gauges, force-measuring elements, torque sensors, and six-component balances; commonly used for static load, low-frequency dynamic load, structural strain, and torque measurement.

**Advantages:** Mature technology, can measure static and low-frequency quantities; relatively stable results can be obtained through the bridge connection and temperature compensation; directly compatible with most strain acquisition systems.

**Limitations:** Excitation stability, bridge connection, lead resistance, and temperature compensation all affect the result; quarter-bridge is more sensitive to lead resistance and temperature; the bridge parameters need per-channel configuration.

**Interface parameters:** The excitation voltage, gain, bridge connection, completion resistor, and temperature-compensation approach jointly affect the output conversion; full-bridge, half-bridge, and quarter-bridge correspond to different wiring and bridge-completion configurations.

#### 3.2.3 Charge Type

**Signal characteristics and principle:** Charge-type piezoelectric sensors output charge rather than voltage, requiring a charge amplifier (an amplifier that converts charge to voltage) to convert the charge to voltage. The input impedance of the charge amplifier is very high, and the feedback capacitance determines the output ratio.

**Typical sensors:** Charge-output pressure, force, and acceleration sensors; commonly used in high-temperature, high-frequency, or strong-shock environments.

**Advantages:** High-temperature resistance, wide frequency band; the sensor body can be made small; suitable for high-shock and high-frequency measurement.

**Limitations:** Sensitive to cable noise and insulation resistance; low-noise cables and good grounding are necessary conditions; the low-frequency response is limited by the discharge time constant (the time for the charge to decay to about 37%); cable movement produces triboelectric noise.

**Interface parameters:** The charge sensitivity, amplifier range, cable insulation, and low-frequency cutoff affect the system response; cable swinging may introduce triboelectric noise.

#### 3.2.4 Bipolar Voltage

**Signal characteristics and principle:** A bipolar voltage output can take positive and negative voltages. Single-ended input references the common terminal, and differential input measures the voltage difference between the two input terminals; the input range and connection are different interface parameters. Noise and common-mode interference on long cables make the input connection and common-mode range practically significant.

**Typical sensors:** Displacement transducers, inclinometers, analogue-output pressure sensors, and industrial sensors with voltage output; commonly seen in low-speed, static, or quasi-static measurement.

**Advantages:** Simple interface, good compatibility; most acquisition systems can connect directly; the range and gain are easy to adjust.

**Limitations:** Long cables easily pick up noise and common-mode interference (interference appearing on both input terminals together); ground loops introduce error; high-accuracy measurement requires shielding, differential input, and good grounding.

**Interface parameters:** The input range, common-mode range, output impedance, and shielding/grounding approach affect the signal matching; differential input can suppress common-mode interference, but its effect is still limited by the common-mode range and wiring conditions.

#### 3.2.5 Current Loop (4–20 mA)

**Signal characteristics and principle:** The current loop (an interface that transmits the measured value by current magnitude) converts the measured value into a 4–20 mA current, and the acquisition system uses a precision sampling resistor to restore the current to voltage. 4 mA usually corresponds to the lower range limit and 20 mA to the upper range limit; current transmission is insensitive to line resistance and electromagnetic interference.

**Typical sensors:** Industrial pressure, level, temperature, and flow transmitters; commonly used for slow-variable measurement over long distances, in the field, or in industrial environments.

**Advantages:** Anti-interference, suitable for long-distance transmission; two-wire transmitters can be powered through the loop at the same time; high degree of interface standardisation.

**Limitations:** Usually low bandwidth, not suitable for high-frequency dynamic quantities; the power-supply and isolation (electrical isolation between input and output) approaches need to be matched; the accuracy and temperature drift of the sampling resistor affect the result.

**Interface parameters:** The sampling resistor, loop power supply, isolation approach, and range jointly affect the reading; the dynamic-measurement capability depends on the specific transmitter and the acquisition-channel bandwidth.

#### 3.2.6 Encoder and Pulse

**Signal characteristics and principle:** Encoder and pulse outputs are used for rotational speed, position, and angle, with the acquisition system counting pulses and converting them to rotational speed or displacement. Incremental encoders (encoders that output a fixed number of pulses per revolution) usually output two quadrature pulse channels A/B and a zero/index signal.

**Typical sensors:** Incremental encoders, rotational-speed sensors, and flowmeters with pulse output; commonly used for torque-speed, power, displacement, and drivetrain measurement.

**Advantages:** Digital interface, anti-interference; the resolution can be raised through the pulses-per-revolution and frequency multiplication; suitable for synchronised rotational-speed and position measurement.

**Limitations:** Inconsistent settings of the pulses-per-revolution, frequency multiplication, and counting direction cause conversion errors; at high speed the pulse frequency may exceed the acquisition-card input limit. Incremental encoders usually need homing or an external reference to establish a position datum, and the index signal provides only a per-revolution reference and cannot alone recover the complete absolute position.

**Interface parameters:** The pulses-per-revolution, frequency multiplication, counting direction, index datum, and maximum input frequency determine the position conversion and the recordable rotational-speed range; the cable and input circuit also affect the pulse integrity.

#### 3.2.7 Bus Digital

**Signal characteristics and principle:** Bus-digital devices output multi-parameter data through RS-485/Modbus, CAN, EtherCAT, or Ethernet. The device completes sampling and protocol packaging internally, and the acquisition system parses the data and time-stamps it according to the protocol.

**Typical devices:** ADCPs, water-quality instruments, GNSS receivers, and weather stations with digital interfaces; commonly used for multi-parameter, remote, or distributed measurement.

**Advantages:** Less wiring, can transmit several parameters simultaneously; digital transmission is anti-interference; devices can carry their own calibration coefficients and status information.

**Limitations:** The protocol latency (the time from device sampling to reception of the data by the acquisition system), the time-stamp source, and manufacturer protocol differences need separate checking; the sampling and update rates of different devices may be inconsistent; protocol-parsing errors cause loss of whole data frames.

**Interface parameters:** The protocol, baud rate, data format, time-stamp source, update rate, and transmission latency affect the parsing and time correspondence; the bus load, wiring, and termination resistors affect multi-device communication.

## Part 4 Supplier Reference

| Category | Main suppliers | Main products | Corresponding sections |
| --- | --- | --- | --- |
| Data acquisition and signal conditioning | HBK, National Instruments (Emerson), Dewesoft, imc Test & Measurement, Kistler, Brüel & Kjær (now part of HBK), Campbell Scientific | Acquisition chassis, modules, signal conditioners, recorders | 3.1, 3.2 |
| Force, moment, and weighing | ATI Industrial Automation, Bertec, Futek, Interface, JR3, Kistler, LCM Systems, Lorenz Messtechnik, Michigan Scientific, Novatech Loadcells, PCB Piezotronics, Straightpoint, Tedea-Huntleigh (VPG Force Sensors), HBK | Force sensors, six-component balances, torque sensors, load shackles | 2.2, 2.9 |
| Pressure, level, and pressure scanning | Endevco, Honeywell, Keller, Kistler, Kulite, Paroscientific, PCB Piezotronics, Scanivalve, TE Connectivity (formerly Pressure Systems, ESP pressure scanners), Validyne | Piezoresistive/piezoelectric/quartz pressure, differential pressure, level, pressure scanners | 2.1, 2.3 |
| Strain, fibre-optic, and distributed sensing | AP Sensing, Febus Optics, HBK, Kyowa, Luna, Micro-Measurements, OptaSense, Silixa, Smart Fibres, Technobis, TML | Strain gauges, fibre Bragg gratings, DTS/DAS, distributed strain | 2.7, 2.17 |
| Flow velocity, flow rate, and particle image velocimetry | Dantec Dynamics, LaVision, Nortek, SonTek, Teledyne RDI, TSI | ADV/ADCP, LDV, PIV, flowmeters | 2.4, 2.18 |
| Optical motion capture and photogrammetry | Correlated Solutions, OptiTrack, PhaseSpace, Qualisys, Vicon, ZEISS (GOM Metrology) | Optical motion capture, DIC, photogrammetry | 2.5, 2.7, 2.18 |
| Inertial, attitude, and navigation | Advanced Navigation, Exail, Inertial Labs, KVH, SBG Systems, Trimble, u-blox, VectorNav, Xsens | IMU, INS, GNSS, integrated navigation | 2.5, 2.13 |
| Vibration and acceleration | Analog Devices, Brüel & Kjær, Endevco, Kistler, PCB Piezotronics, Silicon Designs | Piezoelectric/MEMS accelerometers, vibration sensors | 2.6 |
| Displacement, gap, and encoder | Banner Engineering, Baumer, Heidenhain, Keyence, Kübler, Micro-Epsilon, Panasonic Industry Europe, RDP Electronics, SICK, Solartron Metrology | Laser displacement, LVDT, draw-wire, encoders | 2.5, 2.8 |
| Temperature, hydrology, and water quality | Aanderaa, Campbell Scientific, DwyerOmega (formerly Omega Engineering), Labfacility, RBR, Sea-Bird Scientific, Seapoint, Turner Designs, Valeport, WET Labs (now part of Sea-Bird Scientific) | Temperature, CTD, dissolved oxygen, turbidity, chlorophyll, pH/CO₂ | 2.10, 2.11 |
| Waves, water level, and buoys | Aanderaa, AXYS, Datawell, Nortek, RBR, Sea-Bird Scientific, Sofar Ocean (Spotter), Valeport | Wave buoys, pressure-type water level, ADCP waves | 2.1, 2.10, 2.11 |
| Meteorology and wind | Campbell Scientific, Gill Instruments, Lufft (now part of Kipp & Zonen), Thies Clima, Vaisala, WindCube (Vaisala), ZephIR (ZX Lidars) | Ultrasonic/mechanical anemometry, wind lidar | 2.12 |
| Underwater acoustics, sonar, and hydrophones | Brüel & Kjær, EdgeTech, EvoLogics, Klein Marine Systems, Kongsberg, Sonardyne, Teledyne Marine (including Benthos), Teledyne Reson | Hydrophones, sonar, underwater acoustic communication and positioning | 2.13, 2.14, 2.15 |
| Terrain, seabed, and geophysics | Correlated Solutions, EdgeTech, Faro, Klein Marine Systems, Kongsberg, Leica Geosystems, SICK, ZEISS (GOM Metrology) | Multibeam, side-scan, sub-bottom profiling, laser scanning, photogrammetry | 2.15, 2.18 |
| Optics, imaging, and high-speed cameras | Aquatica, Correlated Solutions, Dantec Dynamics, iX Cameras, LaVision, Photron, SubC Imaging, Teledyne Photometrics, TSI, Vision Research (Phantom), ZEISS (GOM Metrology) | High-speed cameras, PIV/LDV, underwater cameras, illumination | 2.4, 2.7, 2.18 |
| Corrosion and cathodic protection | AMAC Corrosion (AMAC Group), BAC Corrosion Control, Corr Instruments, M. C. Miller Company, Rohrback Cosasco | Reference electrodes, resistance probes, cathodic-protection monitoring | 2.16 |
| Facilities, wave generation, and model services | DHI, Edinburgh Designs, FORCE Technology, HR Wallingford, MARIN | Wave-generation equipment, physical models, hydrodynamic test services | 1.1, 2.x |

Websites are given in Appendix C.

## References

**Standards and Procedures**

- American Institute of Aeronautics and Astronautics. (1998). *AIAA G-077-1998: Guide for the verification and validation of computational fluid dynamics simulations*.
- American Society for Testing and Materials. (n.d.). *ASTM D5096: Standard test method for determining the performance of a cup anemometer or propeller anemometer*.
- American Society of Mechanical Engineers. (2009). *ASME V&V 20-2009: Standard for verification and validation in computational fluid dynamics and heat transfer*.
- British Standards Institution. (n.d.). *BS EN 12473: General principles of cathodic protection in seawater*.
- Det Norske Veritas. (n.d.). *DNV-RP-B401: Cathodic protection design*.
- IEEE. (2019). *IEEE 1588-2019: Standard for a precision clock synchronization protocol for networked measurement and control systems*.
- International Electrotechnical Commission. (n.d.). *IEC 60565: Underwater acoustics — Hydrophones — Calibration in the frequency range 0,01 Hz to 1 MHz*.
- International Electrotechnical Commission. (n.d.). *IEC 60584: Thermocouples*.
- International Electrotechnical Commission. (n.d.). *IEC 60751: Industrial platinum resistance thermometers and platinum temperature sensors*.
- International Organization for Standardization. (2017). *ISO/IEC 17025:2017: General requirements for the competence of testing and calibration laboratories*.
- International Organization for Standardization. (2019). *ISO 8601-1:2019: Date and time — Representations for information interchange — Part 1: Basic rules*.
- International Organization for Standardization. (n.d.). *ISO 15589 series: Petroleum, petrochemical and natural gas industries — Cathodic protection of pipeline systems*.
- International Organization for Standardization. (n.d.). *ISO 20233: Ships and marine technology — Model test method for propeller cavitation noise evaluation in ship design*.
- International Organization for Standardization. (n.d.). *ISO 20283 series: Mechanical vibration — Measurement of vibration on ships*.
- Internet Engineering Task Force. (2010). *RFC 5905: Network Time Protocol Version 4: Protocol and algorithms specification*. https://www.rfc-editor.org/rfc/rfc5905
- ITTC. (2014). *Guide to the expression of uncertainty in experimental hydrodynamics* (Recommended Procedures and Guidelines 7.5-02-01-01, Revision 02). https://www.ittc.info/media/11762/75-02-01-01.pdf
- ITTC. (2014). *ITTC symbols (Version 2014)*. Retrieved 21 October 2026, from https://www.ittc.info/media/4000/alphabetic-ittc-symbols-list2014.pdf
- ITTC. (2017). *Laboratory modelling of multidirectional irregular wave spectra* (Recommended Procedures and Guidelines 7.5-02-07-01.1, Revision 01). https://www.ittc.info/media/11878/75-02-07-011.pdf
- ITTC. (2021). *Guideline for VIV testing* (Recommended Procedures and Guidelines 7.5-02-07-03.10, Revision 01). https://www.ittc.info/media/11916/75-02-07-0310.pdf
- ITTC. (2021). *Open water test* (Recommended Procedures and Guidelines 7.5-02-03-02.1, Revision 04). https://www.ittc.info/media/11808/75-02-03-021.pdf
- ITTC. (2021). *Podded propulsion tests and extrapolation* (Recommended Procedures and Guidelines 7.5-02-03-01.3, Revision 02). https://www.ittc.info/media/11794/75-02-03-013.pdf
- ITTC. (2021). *Propulsion/bollard pull test* (Recommended Procedures and Guidelines 7.5-02-03-01.1, Revision 06). https://www.ittc.info/media/11792/75-02-03-011.pdf
- ITTC. (2024). *Calculation of the weather factor fw for decrease of ship speed in wind and waves* (Recommended Procedures and Guidelines 7.5-02-07-02.8, Revision 02). https://www.ittc.info/media/11900/75-02-07-028.pdf
- ITTC. (2024). *Cavitation induced pressure fluctuations, model scale experiments* (Recommended Procedures and Guidelines 7.5-02-03-03.3, Revision 06). https://www.ittc.info/media/11818/75-02-03-033.pdf
- ITTC. (2024). *Cavitation-induced pressure fluctuations: Numerical prediction methods* (Recommended Procedures and Guidelines 7.5-02-03-03.4, Revision 03). https://www.ittc.info/media/11820/75-02-03-034.pdf
- ITTC. (2024). *Estimation of roll damping* (Recommended Procedures and Guidelines 7.5-02-07-04.5, Revision 02). https://www.ittc.info/media/11942/75-02-07-045.pdf
- ITTC. (2024). *Experiments on rarely occurring events* (Recommended Procedures and Guidelines 7.5-02-07-02.3, Revision 07). https://www.ittc.info/media/11892/75-02-07-023.pdf
- ITTC. (2024). *Free running model tests* (Recommended Procedures and Guidelines 7.5-02-06-01, Revision 05). https://www.ittc.info/media/11864/75-02-06-01.pdf
- ITTC. (2024). *Fresh water and seawater properties* (Recommended Procedures and Guidelines 7.5-02-01-03, Revision 03). https://www.ittc.info/media/11764/75-02-01-03.pdf
- ITTC. (2024). *Global loads seakeeping procedure* (Recommended Procedures and Guidelines 7.5-02-07-02.6, Revision 03). https://www.ittc.info/media/11896/75-02-07-026.pdf
- ITTC. (2024). *Guideline on best practices for the applications of PIV/SPIV in towing tanks and cavitation tunnels* (Recommended Procedures and Guidelines 7.5-02-01-04, Revision 01). https://www.ittc.info/media/11766/75-02-01-04.pdf
- ITTC. (2024). *HSMV seakeeping tests* (Recommended Procedures and Guidelines 7.5-02-05-04, Revision 03). https://www.ittc.info/media/11858/75-02-05-04.pdf
- ITTC. (2024). *Inclining tests* (Recommended Procedures and Guidelines 7.5-02-07-04.7, Revision 01). https://www.ittc.info/media/11946/75-02-07-047.pdf
- ITTC. (2024). *Laboratory modelling of currents* (Recommended Procedures and Guidelines 7.5-02-07-01.6, Revision 01). https://www.ittc.info/media/11886/75-02-07-016.pdf
- ITTC. (2024). *Laboratory modelling of wind* (Recommended Procedures and Guidelines 7.5-02-07-01.5, Revision 01). https://www.ittc.info/media/11884/75-02-07-015.pdf
- ITTC. (2024). *Model tests for offshore wind turbines* (Recommended Procedures and Guidelines 7.5-02-07-03.8, Revision 03). https://www.ittc.info/media/11912/75-02-07-038.pdf
- ITTC. (2024). *Model-scale cavitation test* (Recommended Procedures and Guidelines 7.5-02-03-03.1, Revision 05). https://www.ittc.info/media/11814/75-02-03-031.pdf
- ITTC. (2024). *Model-scale propeller cavitation noise measurements* (Recommended Procedures and Guidelines 7.5-02-03-03.9, Revision 03). https://www.ittc.info/media/11828/75-02-03-039.pdf
- ITTC. (2024). *Predicting the occurrence and magnitude of parametric rolling* (Recommended Procedures and Guidelines 7.5-02-07-04.3, Revision 04). https://www.ittc.info/media/11938/75-02-07-043.pdf
- ITTC. (2024). *Predicting the power saving of wind powered ships* (Recommended Procedures and Guidelines 7.5-02-03-01.9, Revision 00). https://www.ittc.info/media/11806/75-02-03-019.pdf
- ITTC. (2024). *Seakeeping experiments* (Recommended Procedures and Guidelines 7.5-02-07-02.1, Revision 08). https://www.ittc.info/media/11888/75-02-07-021.pdf
- ITTC. (2024). *Sloshing model tests* (Recommended Procedures and Guidelines 7.5-02-07-02.7, Revision 02). https://www.ittc.info/media/11898/75-02-07-027.pdf
- ITTC. (2024). *Uncertainty analysis for free running model tests* (Recommended Procedures and Guidelines 7.5-02-06-05, Revision 03). https://www.ittc.info/media/11872/75-02-06-05.pdf
- ITTC. (2024). *Uncertainty analysis for manoeuvring predictions based on captive manoeuvring tests* (Recommended Procedures and Guidelines 7.5-02-06-04, Revision 04). https://www.ittc.info/media/11870/75-02-06-04.pdf
- ITTC. (2024). *Uncertainty analysis for model testing of offshore wind turbines* (Recommended Procedures and Guidelines 7.5-02-07-03.17, Revision 01). https://www.ittc.info/media/11930/75-02-07-0317.pdf
- ITTC. (2024). *Validation of manoeuvring simulation models* (Recommended Procedures and Guidelines 7.5-02-06-03, Revision 05). https://www.ittc.info/media/11868/75-02-06-03.pdf
- ITTC. (2024). *Visual description and measurement of cavitation events* (Recommended Procedures and Guidelines 7.5-02-03-03.2, Revision 03). https://www.ittc.info/media/11816/75-02-03-032.pdf
- Joint Committee for Guides in Metrology. (2008). *JCGM 100:2008: Evaluation of measurement data — Guide to the expression of uncertainty in measurement*. https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf
- Joint Committee for Guides in Metrology. (2012). *JCGM 200:2012: International vocabulary of metrology — Basic and general concepts and associated terms (VIM)* (3rd ed.).
- U.S. Army Corps of Engineers. (2021). *Cathodic protection systems for civil works structures (EM 1110-2-2704)*. Retrieved 21 October 2026, from https://www.publications.usace.army.mil/Portals/76/Users/182/86/2486/11EM_1110-2-2704%20%28003%29.pdf

**Institutional Manuals**

- Intergovernmental Oceanographic Commission [IOC]. (2006). *Manual on sea level measurement and interpretation, Volume IV: An update to 2006* (IOC Manuals and Guides No. 14, Vol. IV; JCOMM Technical Report No. 31; WMO/TD No. 1339). UNESCO. https://www.psmsl.org/train_and_info/training/manuals/manual_14_final_21_09_06.pdf

**Academic Literature**

- Adrian, R. J. (1991). Particle-imaging techniques for experimental fluid mechanics. *Annual Review of Fluid Mechanics*, *23*, 261–304. https://doi.org/10.1146/annurev.fl.23.010191.001401
- Aldarabseh, S. M., & Merati, P. (2023). An intermediate water gravity wavelength and wave height measurement inside a large wave flume tank. *Journal of Applied Research and Technology*, *21*(3), 407–423. https://doi.org/10.22201/icat.24486736e.2023.21.3.1757
- Altmann, H. (1980). A water-wave height probe with calibration stabilised for changes in water conductivity. *Journal of Physics E: Scientific Instruments*, *13*(4), 390–392. https://doi.org/10.1088/0022-3735/13/4/008
- Barstow, S. F., Hang, O., & van der Vlugt, T. (1994). A field validation of a directional waverider in a SEAWATCH buoy. In *Proceedings of OCEANS 94* (Vol. 2, pp. II/32–II/37). IEEE. https://doi.org/10.1109/OCEANS.1994.364011
- Batagelj, V., Bojkovski, J., & Drnovšek, J. (2003). *Methods of reducing the uncertainty of the self-heating correction of a standard platinum resistance thermometer in temperature measurements of the highest accuracy*. Measurement Science and Technology. https://doi.org/10.1088/0957-0233/14/12/016
- Belyaev, S. N., & Istomin, A. E. (2010). *Methodology of drift compensation and noise modeling of MEMS-gyro of the inertial measurement unit*. Military Technical Collection. https://doi.org/10.33577/2312-4458.3.2010.48-51
- Benetazzo, A., Fedele, F., Gallego, G., Shih, P.-C., & Yezzi, A. (2012). Offshore stereo measurements of gravity waves. *Coastal Engineering*, *64*, 127–138. https://doi.org/10.1016/j.coastaleng.2012.01.007
- Beth, R. A., & Meeks, W. W. (1954). *Magnetic measurement of torque in a rotating shaft*. Review of Scientific Instruments. https://doi.org/10.1063/1.1771141
- Brainard, E., & Gardner, D. (1982). WAVE-TRACK and WAVERIDER heave buoy intercomparison at the entrance to the Columbia River. In *OCEANS 82* (pp. 861–866). IEEE. https://doi.org/10.1109/OCEANS.1982.1151901
- Brenna, A., Lazzari, L., & Ormellese, M. (2012). *Laboratory tests on a potential probe with zinc reference electrode for monitoring of cathodic protection*. In *CORROSION 2012*. https://doi.org/10.5006/c2012-01551
- Bøckmann, A., Pâkozdi, C., Kristiansen, T., Jang, H., & Kim, J. (2014). An experimental and computational development of a benchmark solution for the validation of numerical wave tanks. In *Proceedings of OMAE2014* (OMAE2014-24710). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2014-24710
- Caruana, C., Mollicone, P., & Farrugia, M. (2019). *Development of a simple instantaneous torque measurement system on a rotating shaft*. In *2019 IEEE International Conference on Mechatronics (ICM)*. https://doi.org/10.1109/icmech.2019.8722854
- Chang, K.-A., & Liu, P. L.-F. (1997). Measurement of breaking waves using particle image velocimetry. In *Coastal Engineering 1996* (pp. 527–536). American Society of Civil Engineers. https://doi.org/10.1061/9780784402429.042
- Christensen, E. D., Fuhrman, D., Carstensen, S., Lund de Lemos, S., & Qwist, J. R. K. (2026). Testing a full third-order wave methodology to analyze wave reflection in laboratory wave flume measurements. In *Proceedings of OMAE2026* (OMAE2026-182129). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2026-182129
- Churchill, J. H., Plueddemann, A. J., & Faluotico, S. M. (2006). *Extracting wind sea and swell from directional wave spectra derived from a bottom-mounted ADCP* (WHOI-2006-13). Woods Hole Oceanographic Institution. https://doi.org/10.1575/1912/1372
- Coleman, H. W., & Steele, W. G. (2009). *Experimentation, validation, and uncertainty analysis for engineers* (3rd ed.). Wiley. https://doi.org/10.1002/9780470485682
- Dean, R. G., & Dalrymple, R. A. (1991). *Water wave mechanics for engineers and scientists*. World Scientific. https://doi.org/10.1142/1232
- Ding, Y., Taylor, P. H., Hlophe, T., & Zhao, W. (2025). A comparison of linear and nonlinear 3D semi-Lagrangian motion of moored Waverider and Spotter wave buoys. *Coastal Engineering*, *196*, 104661. https://doi.org/10.1016/j.coastaleng.2024.104661
- Droujko, J. (2026). Beyond turbidity: Embedded modelling of suspended sediment concentration and distributed sensing for morphodynamic observation. *EGU General Assembly 2026*, EGU26-18817. https://doi.org/10.5194/egusphere-egu26-18817
- Dysthe, K., Krogstad, H. E., & Müller, P. (2008). Oceanic rogue waves. *Annual Review of Fluid Mechanics*, *40*(1), 287–310. https://doi.org/10.1146/annurev.fluid.40.111406.102203
- Düz, B., Scharnke, J., & de Wilde, J. (2022). Mitigating spurious low-frequency waves in a model basin with a ramped floor. In *Proceedings of OMAE2022* (OMAE2022-78434). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2022-78434
- Ewans, K., & Collins, C. (2026). A comparison of wave directional spreading measurements made with a Spotter buoy and a directional Waverider buoy in parallel. *Journal of Offshore Mechanics and Arctic Engineering*, *148*(2), 021202. https://doi.org/10.1115/1.4070167
- Faltinsen, O. M. (1990). *Sea loads on ships and offshore structures* (Cambridge Ocean Technology Series). Cambridge University Press.
- Fan, Y., Bao, S., Yang, H., Li, R., Han, Y., & Yu, C. (2026). *Deep learning-based stereo vision for measuring bow wave breaking heights in high-speed ships*. Flow Measurement and Instrumentation. https://doi.org/10.1016/j.flowmeasinst.2026.103377
- Fuellekrug, U., & Sinapius, M. (2001). *Force measurement in vibration testing: Applications to modal identification*. The International Journal of Acoustics and Vibration. https://doi.org/10.20855/ijav.2001.6.274
- Ghaemi-Nasab, M. (n.d.). *Single-axis ultrasonic anemometer in rotational motion* [Doctoral thesis, Universidad Politecnica de Madrid]. https://doi.org/10.20868/upm.thesis.50017
- Goda, Y. (2000). *Random seas and design of maritime structures* (2nd ed.). World Scientific. https://doi.org/10.1142/3587
- Goda, Y., & Suzuki, Y. (1977). Estimation of incident and reflected waves in random wave experiments. In *Coastal Engineering 1976* (pp. 828–845). American Society of Civil Engineers. https://doi.org/10.1061/9780872620834.048
- Gomes, D., Guimarães, V., & Silva, J. (2021). A fully-automatic gap filling approach for motion capture trajectories. *Applied Sciences*, *11*(21), 9847. https://doi.org/10.3390/app11219847
- González-Vera, A. S., Wilting, T. J. S., Holten, A. P. C., van Heijst, G. J. F., & Duran-Matute, M. (2020). High-resolution single-camera photogrammetry: Incorporation of refraction at a fluid interface. *Experiments in Fluids*, *61*(1), Article 3. https://doi.org/10.1007/s00348-019-2826-y
- Goring, D. G., & Nikora, V. I. (2002). Despiking acoustic Doppler velocimeter data. *Journal of Hydraulic Engineering*, *128*(1), 117–126. https://doi.org/10.1061/(ASCE)0733-9429(2002)128:1(117)
- Graber, H. C., Terray, E. A., Donelan, M. A., Drennan, W. M., Van Leer, J. C., & Peters, D. B. (2000). ASIS—A new air–sea interaction spar buoy: Design and performance at sea. *Journal of Atmospheric and Oceanic Technology*, *17*(5), 708–720. https://doi.org/10.1175/1520-0426(2000)017<0708:AANASI>2.0.CO;2
- Hall, M., Buckham, B., & Crawford, C. (2013). Evaluating the importance of mooring line model fidelity in floating offshore wind turbine simulations. *Wind Energy*, *17*(12), 1835–1853. https://doi.org/10.1002/we.1669
- Haran, F. M., Rew, J. K., & Foote, P. D. (1998). *A strain-isolated fibre Bragg grating sensor for temperature compensation of fibre Bragg grating strain sensors*. Measurement Science and Technology. https://doi.org/10.1088/0957-0233/9/8/004
- Hartog, A. H. (2017). *An introduction to distributed optical fibre sensors*. CRC Press. https://doi.org/10.1201/9781315119014
- Herbers, T. H. C., Jessen, P. F., Janssen, T. T., Colbert, D. B., & MacMahan, J. H. (2012). Observing ocean surface waves with GPS-tracked buoys. *Journal of Atmospheric and Oceanic Technology*, *29*(7), 944–959. https://doi.org/10.1175/JTECH-D-11-00128.1
- Hewitt, A. T., Salisbury, R., & Wilson, J. (2010). *Applications of multibeam backscatter: Using multibeam echosounder backscatter to characterize and map seafloor features in shallow and deep water*. In *Offshore Technology Conference*. https://doi.org/10.4043/20672-ms
- Hill, K. O., & Meltz, G. (1997). Fiber Bragg grating technology fundamentals and overview. *Journal of Lightwave Technology*, *15*(8), 1263–1276. https://doi.org/10.1109/50.618320
- Hoar, G., Inglis, D., MacInnis, M., & Tobin, S. (2018). An autonomous GNSS wave sensor module for deployment on existing buoy infrastructure: Comparison and validation of co-located GNSS and accelerometer directional wave sensors. In *OCEANS 2018 MTS/IEEE Charleston* (pp. 1–9). IEEE. https://doi.org/10.1109/OCEANS.2018.8604308
- Hu, C., Wang, Y., Li, Y., & Chen, H. (2021). Experiential study of measurement comparison between ocean buoys and wave gauges in large wave flume. *IOP Conference Series: Earth and Environmental Science*, *621*, 012008. https://doi.org/10.1088/1755-1315/621/1/012008
- Huang, W., Liu, X., & Gill, E. (2017). Ocean wind and wave measurements using X-band marine radar: A comprehensive review. *Remote Sensing*, *9*(12), 1261. https://doi.org/10.3390/rs9121261
- Hughes, S. A. (1993). *Physical models and laboratory techniques in coastal engineering*. World Scientific. https://doi.org/10.1142/2154
- Jaafar, W., Fischer, S., & Bekkour, K. (2009). Velocity and turbulence measurements by ultrasound pulse Doppler velocimetry. *Measurement*, *42*(2), 175–182. https://doi.org/10.1016/j.measurement.2008.05.004
- Judge, F. M., Lyden, E., O'Shea, M., Flannery, B., & Murphy, J. (2021). Uncertainty in wave basin testing of a fixed oscillating water column wave energy converter. *ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems, Part B: Mechanical Engineering*, *7*(4), 040902. https://doi.org/10.1115/1.4051164
- Kajikawa, H., & Kobata, T. (2019). Evaluation and correction for long-term drift of hydraulic pressure gauges monitoring stable and constant pressures. *Measurement*, *134*, 33–39. https://doi.org/10.1016/j.measurement.2018.10.051
- Keller, C., Irani, G., & Chapman, R. (1979). A high-resolution, ocean wave gauge array system. In *OCEANS '79* (pp. 608–613). IEEE. https://doi.org/10.1109/OCEANS.1979.1151220
- Kersey, A. D., Davis, M. A., Patrick, H. J., LeBlanc, M., Koo, K. P., Askins, C. G., Putnam, M. A., & Friebele, E. J. (1997). Fiber grating sensors. *Journal of Lightwave Technology*, *15*(8), 1442–1463. https://doi.org/10.1109/50.618377
- Kim, B.-N., Choi, B. K., Kim, S. H., & Kim, D. S. (2015). Real-time wave height measurements using a cable type wave monitoring system in shallow waters. In *2015 IEEE/OES eleventh current, waves and turbulence measurement (CWTM)* (pp. 1–3). IEEE. https://doi.org/10.1109/CWTM.2015.7098129
- Laurijssen, D., Truijen, S., Saeys, W., & Steckel, J. (2015). *Three sources, three receivers, six degrees of freedom: An ultrasonic sensor for pose estimation and motion capture*. In *2015 IEEE SENSORS*. https://doi.org/10.1109/icsens.2015.7370689
- Lee, J. (2018). Application of strain gauge method for investigating influence of ship shaft movement by hydrodynamic propeller forces on shaft alignment. *Measurement*, *121*, 261–275. https://doi.org/10.1016/j.measurement.2018.02.067
- Lee, J., Hwang, S., & Lee, Y.-Y. (2025). *A novel time synchronization system design and application considering wave modulation for underwater stereo-PIV measurement*. In *2025 IEEE SENSORS*. https://doi.org/10.1109/sensors59705.2025.11331309
- Li, C., Wu, J.-b., Gao, C., Wang, D.-l., Li, J., Deng, K., & Wang, C.-h. (2013). Research on inversion algorithms of directional spectrum used in wave measurement of acoustic Doppler current profiler. *Journal of Electronics & Information Technology*, *34*(10), 2482–2488. https://doi.org/10.3724/SP.J.1146.2012.00276
- Liberzon, D., Vreme, A., Knobler, S., & Bentwich, I. (2019). Detection of breaking waves in single wave gauge records of surface elevation fluctuations. *Journal of Atmospheric and Oceanic Technology*, *36*(9), 1863–1879. https://doi.org/10.1175/JTECH-D-19-0011.1
- Lindsey, N. J., & Martin, E. R. (2021). Fiber-optic seismology. *Annual Review of Earth and Planetary Sciences*, *49*, 309–336. https://doi.org/10.1146/annurev-earth-072420-065213
- Lopes Ribeiro, A. (2008). *Conductivity cells for water salinity measurement*. Instrumentation Viewpoint. https://doi.org/10.5821/iwp.2007.6.15804
- Lyman, T. P., Elsmore, K., Gaylord, B., Byrnes, J. E. K., & Miller, L. P. (2020). Open Wave Height Logger: An open source pressure sensor data logger for wave measurement. *Limnology and Oceanography: Methods*, *18*(7), 335–345. https://doi.org/10.1002/lom3.10370
- Maas, H.-G. (2015). On the accuracy potential in underwater/multimedia photogrammetry. *Sensors*, *15*(8), 18140–18152. https://doi.org/10.3390/s150818140
- Maidanik, G. (1967). Flush-mounted pressure transducer systems as spatial and spectral filters. *The Journal of the Acoustical Society of America*, *42*(5), 1017–1024. https://doi.org/10.1121/1.1910683
- Maleika, W. (2013). The influence of track configuration and multibeam echosounder parameters on the accuracy of seabed DTMs obtained in shallow water. *Earth Science Informatics*, *6*(2), 47–69. https://doi.org/10.1007/s12145-013-0111-9
- Mansard, E. P. D., & Funke, E. R. (1980). The measurement of incident and reflected spectra using a least squares method. In *Coastal Engineering 1980* (pp. 154–172). American Society of Civil Engineers. https://doi.org/10.1061/9780872622647.008
- Marra, G., Clivati, C., Luckett, R., Tampellini, A., Kronjäger, J., Wright, L., Mura, A., Levi, F., Robinson, S., Xuereb, A., Baptie, B., & Calonico, D. (2018). Ultrastable laser interferometry for earthquake detection with terrestrial and submarine cables. *Science*, *361*(6401), 486–490. https://doi.org/10.1126/science.aat4458
- Mase, H., & Iwagaki, Y. (1982). Wave height distributions and wave grouping in surf zone. In *Coastal Engineering 1982* (pp. 58–76). American Society of Civil Engineers. https://doi.org/10.1061/9780872623736.004
- Maulana Aliva, M. R., & Nugroho, H. A. (2019). *Prototype wind tunnel as calibrator anemometer*. Jurnal Meteorologi Klimatologi dan Geofisika. https://doi.org/10.36754/jmkg.v4i3.52
- McKinney, J. P., & Howell, G. L. (2002). An examination of coherence of directional wave time series from bottom-mounted pressure and current sensors. In *OCEANS 2002 MTS/IEEE* (pp. 1755–1763). IEEE. https://doi.org/10.1109/OCEANS.2002.1191899
- Mettlach, T., & Teng, C.-c. (2006). Validation of National Data Buoy Center directional wave measurements using swell waves from distant storms. In *OCEANS 2006* (pp. 1–6). IEEE. https://doi.org/10.1109/OCEANS.2006.306866
- Mieloszyk, M. (2021). Fatigue crack propagation monitoring using fibre Bragg grating sensors. *Vibration*, *4*(3), 700–721. https://doi.org/10.3390/vibration4030039
- Mikoś, M., Kazmierski, K., Wachulec, N., & Sośnica, K. (2024). *Accuracy of satellite positioning using GNSS receivers in sports watches*. Measurement. https://doi.org/10.1016/j.measurement.2024.114426
- Ming, K. Y., Sannasiraj, S. A., & Soon, C. E. (2002). Laboratory study of short-crested breaking waves. In *Ocean wave measurement and analysis (2001)* (pp. 1238–1247). American Society of Civil Engineers. https://doi.org/10.1061/40604(273)125
- Moritz, H. R. (2002). Observing large waves using bottom-mounted pressure and current meters. In *Ocean wave measurement and analysis (2001)* (pp. 44–53). American Society of Civil Engineers. https://doi.org/10.1061/40604(273)5
- Nwogu, O. (1989). Maximum entropy estimation of directional wave spectra from an array of wave probes. *Applied Ocean Research*, *11*(4), 176–182. https://doi.org/10.1016/0141-1187(89)90016-3
- O-larnnithipong, N., & Barreto, A. (2016). *Gyroscope drift correction algorithm for inertial measurement unit used in hand motion tracking*. In *2016 IEEE SENSORS*. https://doi.org/10.1109/icsens.2016.7808525
- Oberkampf, W. L., & Roy, C. J. (2010). *Verification and validation in scientific computing*. Cambridge University Press. https://doi.org/10.1017/CBO9780511760396
- Osborne, A. R. (1994). Shallow water cnoidal wave interactions. *Nonlinear Processes in Geophysics*, *1*(4), 241–251. https://doi.org/10.5194/npg-1-241-1994
- Pope, S. B. (2000). *Turbulent flows*. Cambridge University Press.
- Pos, J. D., & Kilner, F. A. (1982). Laboratory photogrammetric wave height measurement. In *Coastal Engineering 1982* (pp. 695–709). American Society of Civil Engineers. https://doi.org/10.1061/9780872623736.044
- Raffel, M., Willert, C. E., Wereley, S. T., & Kompenhans, J. (2007). *Particle image velocimetry: A practical guide*. Springer. https://doi.org/10.1007/978-3-540-72308-0
- Raghuwanshi, N. K., & Parey, A. (2018). *Experimental measurement of mesh stiffness by laser displacement sensor technique*. Measurement. https://doi.org/10.1016/j.measurement.2018.06.035
- Reis, J., Morgado, M., Batista, P., Oliveira, P., & Silvestre, C. (2016). *Design and experimental validation of a USBL underwater acoustic positioning system*. Sensors. https://doi.org/10.3390/s16091491
- Reis, M. L., Mello, O., & Uyeno, S. (2003). Calibration uncertainty of an external six-component wind tunnel balance. In *33rd AIAA Fluid Dynamics Conference and Exhibit* (AIAA 2003-3884). American Institute of Aeronautics and Astronautics. https://doi.org/10.2514/6.2003-3884
- Rowe, D. T., Vogel, C. R., & Tucker, H. S. W. (2026). Methodology for the characterisation of a hydraulic flume using acoustic Doppler velocimetry. *Ocean Engineering*, *368*, 128033. https://doi.org/10.1016/j.oceaneng.2026.128033
- Schindler, R., Stripling, S., & Whitehouse, R. (2016). The influence of physical cohesion on scour around a monopile. In *Scour and Erosion* (pp. 325–334). CRC Press. https://doi.org/10.1201/9781315375120-38
- Sciacchitano, A. (2019). Uncertainty quantification in particle image velocimetry. *Measurement Science and Technology*, *30*, 092001. https://doi.org/10.1088/1361-6501/ab1db8
- Scott, N. (2005). Estimating steep wave statistics using a wave gauge array. *Applied Ocean Research*, *27*(1), 23–38. https://doi.org/10.1016/j.apor.2005.09.002
- Sedghi, H., & Kimiaei, M. (2018). Effects of mooring line design parameters on the line dynamics and fatigue response of subsea mooring lines. In *Proceedings of OMAE2018* (OMAE2018-78716). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2018-78716
- Seo, J., Seol, D., & Rhee, S. (2011). *Towed underwater PIV measurement for free-surface wave effects on turbulent wake of a surface-piercing body*. In *41st AIAA Fluid Dynamics Conference and Exhibit*. https://doi.org/10.2514/6.2011-3727
- Sheng, W.-w. (2022). Precise measurement for 3D laser scanner with large range [Preprint]. *Research Square*. https://doi.org/10.21203/rs.3.rs-2140833/v1
- Steen, S., Ankit, & Gavrilin, S. (2015). Uncertainty analysis in ship-model resistance test. In *Proceedings of OMAE2015* (OMAE2015-41250). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2015-41250
- Steinle, F. (2000). Modeling of anelastic effects in calibration of a six-component wind tunnel balance. In *38th Aerospace Sciences Meeting and Exhibit* (AIAA 2000-150). American Institute of Aeronautics and Astronautics. https://doi.org/10.2514/6.2000-150
- Stern, F., Wilson, R. V., Coleman, H. W., & Paterson, E. G. (2001). Comprehensive approach to verification and validation of CFD simulations—Part 1: Methodology and procedures. *Journal of Fluids Engineering*, *123*(4), 793–802. https://doi.org/10.1115/1.1412235
- Sutherland, D. R. J., Noble, D. R., Steynor, J., Davey, T., & Bruce, T. (2017). Characterisation of current and turbulence in the FloWave Ocean Energy Research Facility. *Ocean Engineering*, *139*, 103–115. https://doi.org/10.1016/j.oceaneng.2017.02.028
- Tannuri, E. A., Mello, P. C., Sales, J. S., Simos, A. N., & Matos, V. L. F. (2007). Estimation of directional wave spectrum using a wave-probe array. *Marine Systems & Ocean Technology*, *3*(2), 123–129. https://doi.org/10.1007/BF03449221
- Thielicke, W., & Stamhuis, E. J. (2014). PIVlab – Towards user-friendly, affordable and accurate digital particle image velocimetry in MATLAB. *Journal of Open Research Software*, *2*(1), e30. https://doi.org/10.5334/jors.bl
- Tierno, M., Wang, Y., Choi, Y.-M., Descamps, T., Ducrozer, G., & Bouscasse, B. (2026). Validation of a coupled CFD-HOS method for 3D breaking wave propagation through experimental comparison. In *Proceedings of OMAE2026* (OMAE2026-182041). American Society of Mechanical Engineers. https://doi.org/10.1115/OMAE2026-182041
- Tomczyk, K. (2016). Impact of uncertainties in accelerometer modeling on the maximum values of absolute dynamic error. *Measurement*, *80*, 71–78. https://doi.org/10.1016/j.measurement.2015.11.011
- Valland, G., & Eliassen, S. (1979). Monitoring of cathodic protection systems for offshore structures and pipelines. In *Offshore Technology Conference* (OTC 3601). Offshore Technology Conference. https://doi.org/10.4043/3601-MS
- Vezzetti, C. F. (1976). *A new dynamic pressure source for the calibration of pressure transducers* (NBS Technical Note 914). National Bureau of Standards. https://doi.org/10.6028/nbs.tn.914
- Villalonga Llauger, J., Puigdefàbregas Sagristà, J., & Jordà Sánchez, G. (2024). LoCOS-wave: A low cost open source pressure gauge for measuring sea waves. *Instrumentation Viewpoint*, (23), 43–44. https://doi.org/10.5821/iwp.2024.23.14154
- Wang, Q., Fang, Y.-l., & Liu, H. (2019). Multi-lens stereo reconstruction of wave surface in a wave basin. *Journal of Hydrodynamics*, *31*(5), 1069–1072. https://doi.org/10.1007/s42241-019-0074-5
- Wang, Q., Lu, H., Tang, W., He, J., & Liu, H. (2025). Stereo reconstruction of the free surface of breaking bow waves in a towing tank for DTMB 5415 model. *Ocean Engineering*, *324*, 120764. https://doi.org/10.1016/j.oceaneng.2025.120764
- Watkinson, P. S. (1984). Calibration and inherent errors of a two hydrophone sound intensity measurement system. In *Underwater acoustic calibration and measurements*. https://doi.org/10.25144/23638
- Westerweel, J. (1997). Fundamentals of digital particle image velocimetry. *Measurement Science and Technology*, *8*(12), 1379–1392. https://doi.org/10.1088/0957-0233/8/12/002
- Whitehead, N. (1999). Non-contact torque measurement on a rotating shaft incorporating a mechanical resonator. In *IEE Colloquium on Innovative Pressure, Force and Flow Measurements*. https://doi.org/10.1049/ic:19990500
- Williamson, T. N., & Crawford, C. G. (2011). *Estimation of suspended-sediment concentration from total suspended solids and turbidity data for Kentucky, 1978–1995*. Journal of the American Water Resources Association. https://doi.org/10.1111/j.1752-1688.2011.00538.x
- Yang, L., & Sun, X. (2022). *Monitoring and controlling cathodic protection without using reference electrode: Cathodic protection effectiveness margin from multielectrode sensor*. In *CORROSION 2022*. https://doi.org/10.5006/c2022-17872
- Young, I. R., Rosenthal, W., & Ziemer, F. (1985). A three-dimensional analysis of marine radar images for the determination of ocean wave directionality and surface currents. *Journal of Geophysical Research: Oceans*, *90*(C1), 1049–1059. https://doi.org/10.1029/JC090iC01p01049
- Zelt, J. A., & Skjelbreia, J. E. (1993). Estimating incident and reflected wave fields using an arbitrary number of wave gauges. In *Coastal Engineering 1992* (pp. 777–789). American Society of Civil Engineers. https://doi.org/10.1061/9780872629332.058
- Zen, H., Kusuma, I. R., & Widjiati, E. (2022). Robust laboratory scale seakeeping test wave measurement method use ultrasonic sensor. *IOP Conference Series: Earth and Environmental Science*, *1081*(1), 012042. https://doi.org/10.1088/1755-1315/1081/1/012042
- Zhang, L. (2014). A design method of underwater positioning system based on USBL. *Applied Mechanics and Materials*, *644–650*, 968–972. https://doi.org/10.4028/www.scientific.net/amm.644-650.968
- Zhou, H., Zhong, Y., Song, H., & Wang, S. (2021). *Accelerometer mounting error calibration*. In *Gyro-free inertial navigation technology*. Springer. https://doi.org/10.1007/978-981-15-4972-4_6
- Zhu, S., Li, X., Wu, R., Gao, M., Liu, J., & Guo, A. (2026). *Laboratory method for three-dimensional scour pit reconstruction based on laser scanning*. Measurement. https://doi.org/10.1016/j.measurement.2026.121173

**Web Pages**

- Aanderaa. (2026). *Oceanographic instruments and sensors* [Product page]. Retrieved 7 October 2026, from https://www.aanderaa.com/
- Analog Devices. (2014). *ADXL375: 3-axis, ±200 g digital MEMS accelerometer (Rev. B)*. Retrieved 21 October 2026, from https://www.analog.com/media/en/technical-documentation/data-sheets/adxl375.pdf
- AP Sensing. (2026). *Distributed fibre optic sensing* [Product page]. Retrieved 7 October 2026, from https://www.apsensing.com/en/technology-and-products/distributed-acoustic-sensing
- BAC Corrosion Control. (2026). *Cathodic protection systems* [Product page]. Retrieved 7 October 2026, from https://www.bacgroup.com/products/cathodic-protection-materials/
- Banner Engineering. (2026). *Laser displacement sensors* [Product page]. Retrieved 6 October 2026, from https://www.bannerengineering.com/us/en/products/sensors/laser-distance-measurement.html
- Brüel & Kjær (HBK). (2026). *Accelerometers* [Product page]. Retrieved 7 October 2026, from https://www.hbkworld.com/en/products/transducers/vibration/accelerometers
- Brüel & Kjær (HBK). (n.d.). *Hydrophone type 8103* [Datasheet]. Retrieved 7 October 2026, from https://www.hbkworld.com/en/products/transducers/acoustic
- Campbell Scientific. (2026). *Environmental measurement and monitoring instruments* [Product page]. Retrieved 7 October 2026, from https://www.campbellsci.co.uk/
- Corr Instruments. (2026). *CMAS corrosion probes* [Product page]. Retrieved 6 October 2026, from https://www.corrinstruments.com/ins/corprobes.html
- Dantec Dynamics. (2026a). *Laser Doppler anemometry (LDA)* [Product page]. Retrieved 6 October 2026, from https://www.dantecdynamics.com/solutions/fluid-mechanics/laser-doppler-anemometry-lda/
- Dantec Dynamics. (2026b). *Optical measurement systems* [Product page]. Retrieved 6 October 2026, from https://www.dantecdynamics.com/
- Dantec Dynamics. (n.d.). *Measurement principles of laser Doppler anemometry*. Retrieved 21 October 2026, from https://www.dantecdynamics.com/solutions/fluid-mechanics/laser-doppler-anemometry-lda/measurement-principles-of-lda/
- DwyerOmega (formerly Omega Engineering). (2026). *Temperature sensors* [Product page]. Retrieved 6 October 2026, from https://www.dwyeromega.com/en-gb/c/temperature
- EdgeTech. (2026). *Side scan sonar systems* [Product page]. Retrieved 7 October 2026, from https://www.edgetech.com/
- Endevco (PCB Piezotronics). (2026). *Pressure sensors* [Product page]. Retrieved 7 October 2026, from https://www.pcb.com/sensors-for-test-measurement/pressure-transducers
- Faro. (2026). *3D laser scanners* [Product page]. Retrieved 6 October 2026, from https://www.faro.com/en
- Febus Optics. (2026). *Distributed acoustic sensing* [Product page]. Retrieved 6 October 2026, from https://www.febus-optics.com/en/
- FUTEK. (2026). *Torque sensors* [Product page]. Retrieved 7 October 2026, from https://www.futek.com/store/torque-sensors
- Gill Instruments. (2022). *WindMaster user manual: 3-axis ultrasonic anemometers (Issue 17)*. Retrieved 21 October 2026, from https://gillinstruments.com/wp-content/uploads/2024/06/Windmaster-manual-Iss-17.pdf
- Gill Instruments. (2026). *Ultrasonic wind sensors and weather stations* [Product page]. Retrieved 7 October 2026, from https://gillinstruments.com/
- Group Four Transducers. (n.d.). *How to select the right load cell*. Retrieved 5 October 2026, from https://www.groupfourtransducers.com/resources/articles/how-to-select-the-right-load-cell/
- HBK. (2026a). *Strain gauges and measuring instruments* [Product page]. Retrieved 7 October 2026, from https://www.hbkworld.com/en/products/transducers
- HBK. (2026b). *Torque transducers, torque sensors and torque meters* [Product page]. Retrieved 7 October 2026, from https://www.hbkworld.com/en/products/transducers/torque
- InfraPortal, UK Research and Innovation. (n.d.). *Kelvin Hydrodynamics Laboratory*. https://www.infraportal.org.uk/infrastructure/kelvin-hydrodynamics-laboratory
- Interface, Inc. (2024). *Load cells 101 guide: The load cell primer*. Retrieved 2 October 2026, from https://www.interfaceforce.com/wp-content/uploads/Interface-Load-Cell-101-Guide-2024-Edition.pdf
- Keller. (2026). *Pressure measurement instruments* [Product page]. Retrieved 7 October 2026, from https://www.keller-druck.com/
- Keyence. (2026). *LK-G5000 series laser displacement sensor* [Product page]. Retrieved 7 October 2026, from https://www.keyence.com/products/measure/laser-1d/
- Kistler. (2026a). *Accelerometers* [Product page]. Retrieved 7 October 2026, from https://www.kistler.com/INT/en/c/accelerometers/CG21-accelerometers
- Kistler. (2026b). *Pressure sensors* [Product page]. Retrieved 7 October 2026, from https://www.kistler.com/GB/en/c/pressure-sensors/CG21-pressure-sensors
- Kistler. (n.d.). *6-axis force/torque sensor type 9306A* [Datasheet]. Retrieved 5 October 2026, from https://kistler.cdn.celum.cloud/SAPCommerce_Download_original/003-290e.pdf
- Kongsberg Discovery. (2026). *Maritime and subsea systems* [Product page]. Retrieved 7 October 2026, from https://www.kongsberg.com/
- Kulite. (2026). *Pressure transducers* [Product page]. Retrieved 7 October 2026, from https://kulite.com/products/
- KYOWA. (2026). *Strain gauges* [Product page]. Retrieved 7 October 2026, from https://www.kyowa-ei.com/en/
- LaVision. (2026). *FlowMaster PIV systems* [Product page]. Retrieved 7 October 2026, from https://www.lavision.de/en/products/flowmaster/index.php
- Leica Geosystems. (2026). *3D laser scanning and distance measurement* [Product page]. Retrieved 7 October 2026, from https://leica-geosystems.com/products/laser-scanners
- Library of Congress. (n.d.). *Sustainability of digital formats: Planning for Library of Congress collections*. Retrieved 19 October 2026, from https://www.loc.gov/preservation/digital/formats/
- Lorenz Messtechnik. (2026). *Torque and force sensors* [Product page]. Retrieved 7 October 2026, from https://www.lorenz-messtechnik.de/
- Luna Innovations. (2026). *Distributed fibre optic sensing systems* [Product page]. Retrieved 7 October 2026, from https://lunainc.com/
- Luna Innovations. (n.d.). *ODiSI 6000 series data sheet*. Retrieved 21 October 2026, from https://lunainc.com/sites/default/files/assets/files/data-sheet/LUNA%20ODiSI%206000%20Data%20Sheet.pdf
- M. C. Miller Company. (2026). *Reference electrodes and corrosion probes* [Product page]. Retrieved 6 October 2026, from https://www.mcmiller.com/
- Micro-Epsilon. (2026). *Displacement sensors* [Product page]. Retrieved 7 October 2026, from https://www.micro-epsilon.com/displacement-position-sensors/laser-sensor/
- Micro-Measurements. (2026). *Strain gauge technology* [Product page]. Retrieved 7 October 2026, from https://micro-measurements.com/stress-analysis-strain-gages
- Milwaukee Instruments. (n.d.). *MA840 polarographic dissolved oxygen probe*. Retrieved 21 October 2026, from https://milwaukeeinstruments.com/milwaukee-ma840-polarographic-dissolved-oxygen-probe/
- National Instruments. (n.d.). *Data acquisition basics and terminology*. Retrieved 19 October 2026, from https://www.ni.com/en/shop/data-acquisition/sensor-fundamentals--data-acquisition-basics-and-terminology.html
- National Physical Laboratory. (n.d.). *Underwater acoustics*. Retrieved 21 October 2026, from https://www.npl.co.uk/products-services/underwater-acoustics
- NOAA Office of Coast Survey. (n.d.). *Hydrographic survey equipment*. Retrieved 21 October 2026, from https://nauticalcharts.noaa.gov/learn/hydrographic-survey-equipment.html
- Nortek. (2026). *Acoustic Doppler instruments for water velocity* [Product page]. Retrieved 7 October 2026, from https://www.nortekgroup.com/
- Nortek. (n.d.-a). *Speed of sound* [Support article]. https://support.nortekgroup.com/hc/en-us/articles/21672602923420-Speed-of-sound
- Nortek. (n.d.-b). *Velocimeters comprehensive manual*. Retrieved 21 October 2026, from https://www.nortekgroup.com/assets/software/N3015-030-Comprehensive-Manual-Velocimeters_1118.pdf
- OptaSense. (2026). *Distributed fibre sensing* [Product page]. Retrieved 6 October 2026, from https://www.optasense.com/
- PCB Piezotronics. (2026). *Model 113B26 ICP dynamic pressure sensor* [Datasheet]. Retrieved 7 October 2026, from https://www.pcb.com/products?m=113B26
- PCB Piezotronics. (n.d.-a). *Force and torque measurement* [Technical reference]. Retrieved 2 October 2026, from https://www.pcb.com/contentstore/mktgcontent/linkeddocuments/Force-Torque/TM-FRC-PosterBook_Lowres.pdf
- PCB Piezotronics. (n.d.-b). *Model 352C33 ICP accelerometer* [Datasheet]. https://www.pcb.com/products?m=352C33
- PCB Piezotronics. (n.d.-c). *Operating guide for charge output pressure sensors*. Retrieved 21 October 2026, from https://www.pcb.com/contentstore/docs/PCB_Corporate/Pressure/Products/Manuals/CA112A05_061A01.pdf
- PCB Piezotronics. (n.d.-d). *Signal conditioning basics*. Retrieved 21 October 2026, from https://www.pcb.com/resources/technical-information/signal-conditioning-basics
- Photron. (2026). *High-speed cameras* [Product page]. Retrieved 7 October 2026, from https://photron.com/
- Qualisys. (2026). *Miqus motion capture cameras* [Product page]. Retrieved 7 October 2026, from https://www.qualisys.com/cameras/miqus/
- RBR. (2026). *Oceanographic instruments* [Product page]. Retrieved 7 October 2026, from https://rbr-global.com/
- Rohrback Cosasco. (2026). *Corrosion monitoring* [Product page]. Retrieved 6 October 2026, from https://www.cosasco.com/
- Scanivalve. (2026a). *Introducing MPS4264 Gen2: Smarter, faster, and fully synchronous*. Retrieved 21 October 2026, from https://scanivalve.com/introducing-mps4264-gen2-smarter-faster-and-fully-synchronous/
- Scanivalve. (2026b). *Pressure scanning systems* [Product page]. Retrieved 7 October 2026, from https://scanivalve.com/products/pressure-measurement/ethernet-intelligent-pressure-scanners/
- Sea-Bird Scientific. (2026). *Oceanographic sensors* [Product page]. Retrieved 7 October 2026, from https://www.seabird.com/
- SICK. (2026). *Industrial sensors* [Product page]. Retrieved 7 October 2026, from https://www.sick.com/
- Silixa. (2026). *iDAS distributed acoustic sensing* [Product page]. Retrieved 7 October 2026, from https://silixa.com/technology/idas-intelligent-distributed-acoustic-sensor/
- Silixa. (n.d.). *Introduction to distributed temperature sensing*. Retrieved 21 October 2026, from https://silixa.com/resources/downloads/introduction-to-distributed-temperature-sensing/
- Sonardyne. (n.d.-a). *The evolution of sparse LBL range aiding: Less is more in subsea positioning*. Retrieved 21 October 2026, from https://www.sonardyne.com/the-evolution-of-sparse-lbl-range-aiding-less-is-more-in-subsea-positioning/
- Sonardyne. (n.d.-b). *The importance of quality GNSS for Ranger 2 and GyroUSBL operations*. Retrieved 21 October 2026, from https://www.sonardyne.com/products-knowledge-base/the-importance-of-quality-gnss-for-ranger-2-and-gyrousbl-operations/
- SonTek. (2026). *FlowTracker2 handheld ADV* [Product page]. Retrieved 7 October 2026, from https://www.ysi.com/flowtracker2
- Straightpoint. (n.d.). *Loadshackle data sheet*. Retrieved 20 October 2026, from https://www.abqindustrial.net/store/images/products/pdf/dillon-dynamometers/StraightPoint-Shackle-Load-Cells-Loadshackles-Data-Sheet.pdf
- TDK. (n.d.). *NTC thermistors: NTC elements*. Retrieved 21 October 2026, from https://product.tdk.com/en/techlibrary/productoverview/ntc-elements.html
- Teledyne RDI. (2026). *Workhorse II Sentinel ADCP* [Product page]. Retrieved 7 October 2026, from https://www.teledynemarine.com/brands/rdi
- Teledyne Vision Solutions. (2026). *High-speed and scientific cameras* [Product page]. Retrieved 7 October 2026, from https://www.teledynevisionsolutions.com/
- TML. (2026). *Strain gauges* [Product page]. Retrieved 7 October 2026, from https://www.tml.jp/e
- Transcell. (2026). *Load cell buying guide*. Retrieved 5 October 2026, from https://transcell.com/load-cell-buying-guide/
- Trimble. (2026). *GNSS positioning products* [Product page]. Retrieved 7 October 2026, from https://www.trimble.com/en
- Turner Designs. (2026). *Turbidity and fluorescence sensors* [Product page]. Retrieved 7 October 2026, from https://www.turnerdesigns.com/
- u-blox. (2026). *GNSS positioning modules* [Product page]. Retrieved 7 October 2026, from https://www.u-blox.com/en
- University of Strathclyde. (n.d.). *Kelvin Hydrodynamics Laboratory*. https://www.strath.ac.uk/engineering/navalarchitectureoceanmarineengineering/workingwithbusinessorganisations/ourfacilities/kelvinhydrodynamicslaboratory/
- Vaisala. (2026). *Weather and environmental sensors* [Product page]. Retrieved 7 October 2026, from https://www.vaisala.com/en
- Validyne. (2026). *Differential pressure transducers* [Product page]. Retrieved 6 October 2026, from https://www.validyne.com/products/
- VectorNav. (2026). *VN-100 IMU/AHRS* [Product page]. Retrieved 7 October 2026, from https://www.vectornav.com/products/detail/vn-100
- VectorNav. (n.d.). *GPS/INS: Theory of operation*. Retrieved 21 October 2026, from https://www.vectornav.com/resources/inertial-navigation-primer/theory-of-operation/theory-gpsins
- WET Labs (Sea-Bird Scientific). (2026). *Optical water quality sensors* [Product page]. Retrieved 7 October 2026, from https://www.seabird.com/wet-labs
- ZEISS (GOM Metrology). (2026). *Optical 3D metrology* [Product page]. Retrieved 6 October 2026, from https://www.zeiss.com/metrology/en/home.html
- ZWO. (n.d.). *ASI662 camera manual*. Retrieved 21 October 2026, from https://i.zwoastro.com/zwo-website/manuals/ASI662_Manual_EN_V1.0.pdf

## Appendices

### Appendix A Abbreviations and Full English Terms

| Abbreviation | Full English term | Chinese | Appears in |
| --- | --- | --- | --- |
| ADV | Acoustic Doppler Velocimeter | Acoustic Doppler point velocimeter | 2.4.2 |
| ADCP | Acoustic Doppler Current Profiler | Acoustic Doppler current profiler | 2.1.2, 2.4.2 |
| ASTM | American Society for Testing and Materials | American Society for Testing and Materials | 2.12.2 |
| DIC | Digital Image Correlation | Digital image correlation | 2.7.2, 2.18.2 |
| DNV | Det Norske Veritas | Det Norske Veritas | 2.16.3 |
| DVL | Doppler Velocity Log | Doppler velocity log | 2.13.6 |
| FBG | Fibre Bragg Grating | Fibre Bragg grating | 2.7.2 |
| FSO | Full-Scale Output | Full-scale output | 2.2.2 |
| GNSS | Global Navigation Satellite System | Global navigation satellite system | 2.13.2 |
| GUM | Guide to the Expression of Uncertainty in Measurement | Guide to the Expression of Uncertainty in Measurement | 2.2.4 |
| IEC | International Electrotechnical Commission | International Electrotechnical Commission | 2.10.2, 2.14.1 |
| IEPE | Integrated Electronics Piezo-Electric | Integrated electronics piezoelectric (constant-current-source type) | 2.6.6 |
| IMU | Inertial Measurement Unit | Inertial measurement unit | 2.5.2 |
| INS | Inertial Navigation System | Inertial navigation system | 2.13.6 |
| ISO | International Organization for Standardization | International Organization for Standardization | 2.10.4, 2.11.4, 2.16.3, 2.17.4 |
| ITTC | International Towing Tank Conference | International Towing Tank Conference | Throughout |
| JCGM | Joint Committee for Guides in Metrology | Joint Committee for Guides in Metrology | 2.2.4, Appendix B |
| LDV | Laser Doppler Velocimetry | Laser Doppler velocimetry | 2.4.2 |
| LVDT | Linear Variable Differential Transformer | Linear variable differential transformer | 2.8.2 |
| MEMS | Micro-Electro-Mechanical System | Micro-electro-mechanical system | 2.6.2 |
| PIV | Particle Image Velocimetry | Particle image velocimetry | 2.4.2 |
| PPP | Precise Point Positioning | Precise point positioning | 2.13.6 |
| RMS | Root Mean Square | Root mean square | 2.1.2 |
| RTK | Real-Time Kinematic | Real-time kinematic differential positioning | 2.13.6 |
| SPIV | Stereo Particle Image Velocimetry | Stereo particle image velocimetry | 2.4.2 |
| TOF | Time of Flight | Time of flight | 2.5.6 |
| USBL | Ultra-Short Baseline | Ultra-short baseline underwater acoustic positioning | 2.13.6 |
| VIV | Vortex-Induced Vibration | Vortex-induced vibration | 2.6 |

### Appendix B Standards and Specification References

| Topic | Document | Use |
| --- | --- | --- |
| Tank test methods and uncertainty | ITTC Recommended Procedures and Guidelines, the series on general tests, force and mooring measurement, wave and wave-probe measurement, and test uncertainty (specific numbers according to the latest catalogue) (International Towing Tank Conference, n.d.) | Industry benchmark for test design, calibration, and uncertainty evaluation |
| Marine energy resources and device testing | IEC TS 62600 series (International Electrotechnical Commission, n.d.) | Testing and evaluation of wave, tidal, and ocean-thermal-energy devices |
| Offshore environmental conditions and loads | DNV-RP-C205 Environmental conditions and environmental loads (Det Norske Veritas, n.d.) | Selection of environmental parameters and load calculation |
| Mooring systems of floating structures | API RP 2SK Design and analysis of stationkeeping systems for floating structures (American Petroleum Institute, n.d.) | Mooring design and tension evaluation |
| General requirements for offshore structures | ISO 19901 series, including the parts on metocean conditions and stationkeeping systems (International Organization for Standardization, n.d.) | Site conditions and structural integrity |
| Fixed steel structures | ISO 19902 Offshore fixed steel structures (International Organization for Standardization, n.d.) | Structural design and fatigue evaluation |
| Wind-turbine loads and site conditions | DNV-ST-0437 (Det Norske Veritas, n.d.) | Offshore wind-turbine loads and site conditions |
| Underwater acoustic measurement | IEC 60565 Underwater acoustics — Hydrophones — Calibration (International Electrotechnical Commission, n.d.) | Calibration basis of the acoustic measurement in Section 2.14 |
| Competence of calibration laboratories | ISO/IEC 17025:2017 (International Organization for Standardization, 2017) | Laboratory-capability requirements for calibration and traceability |
| Expression of uncertainty | JCGM 100 Guide to the Expression of Uncertainty in Measurement (Joint Committee for Guides in Metrology, 2008) | General method for uncertainty evaluation and reporting |
| Grading of platinum resistance thermometers and thermocouples | IEC 60751 Industrial platinum resistance thermometers, IEC 60584 Thermocouples (International Electrotechnical Commission, n.d.) | Basis of the temperature tolerance grading in Section 2.10 |
| Ship vibration measurement | ISO 20283 series Mechanical vibration — Measurement of vibration on ships (International Organization for Standardization, n.d.) | Reporting convention of the vibration measurement in Section 2.6 |
| Model tests of propeller cavitation noise | ISO 20233 Ships and marine technology — Model test method for propeller cavitation noise evaluation in ship design (International Organization for Standardization, n.d.) | Standard entry point for the cavitation-noise measurement in Section 2.14 |
| Pipeline cathodic protection | ISO 15589 series Petroleum, petrochemical and natural gas industries — Cathodic protection of pipeline systems (International Organization for Standardization, n.d.) | Design basis of the pipeline monitoring in Section 2.16 |
| Cathodic protection design | DNV-RP-B401 Cathodic protection design (Det Norske Veritas, n.d.) | Basis of the cathodic-protection system design in Section 2.16 |
| General principles of cathodic protection in seawater | BS EN 12473 (British Standards Institution, n.d.) | General principles of the protection criterion in Section 2.16 |
| Performance testing of cup and propeller anemometers | ASTM D5096 (American Society for Testing and Materials, n.d.) | Test method for the mechanical anemometers in Section 2.12 |

### Appendix C Supply Channels and Websites

**Sensor Suppliers**

| Channel | Website | Description |
| --- | --- | --- |
| Aanderaa | https://www.aanderaa.com/ | Hydrological temperature and CTD |
| Advanced Navigation | https://www.advancednavigation.com/ | Inertial and integrated navigation |
| AMAC Corrosion (AMAC Group) | https://amacgroup.com.au/amac-corrosion | Cathodic protection systems |
| Analog Devices | https://www.analog.com/ | MEMS accelerometers |
| AP Sensing | https://www.apsensing.com/en/technology-and-products/distributed-acoustic-sensing | Distributed fibre-optic sensing |
| Aquatica | https://aquaticadigital.com/ | Underwater camera housings |
| ATI Industrial Automation | https://www.ati-ia.com/ | Multi-component force and torque sensors |
| AXYS | https://www.axys.com/ | Wave buoys and ocean observation |
| Banner Engineering | https://www.bannerengineering.com/us/en/products/sensors/laser-distance-measurement.html | Laser ranging |
| Baumer | https://www.baumer.com/gb/en | Encoders |
| Bertec | https://www.bertec.com/ | Force plates and force sensors |
| Brüel & Kjær (now part of HBK) | https://www.hbkworld.com/en | Accelerometers and hydrophones |
| Campbell Scientific | https://www.campbellsci.co.uk/ | Acquisition and recording |
| Corr Instruments | https://www.corrinstruments.com/ins/corprobes.html | CMAS coupled multi-electrode array corrosion probes |
| Correlated Solutions | https://www.correlatedsolutions.com/ | Digital image correlation and photogrammetry software |
| Dantec Dynamics | https://www.dantecdynamics.com/ | Fluid and particle image velocimetry |
| Datawell | https://www.datawell.nl/ | Wave buoys |
| Dewesoft | https://dewesoft.com/ | Data acquisition and test systems |
| DwyerOmega (formerly Omega Engineering) | https://www.dwyeromega.com/en-gb/c/temperature | Temperature sensors |
| EdgeTech | https://www.edgetech.com/ | Side-scan and sub-bottom profiling |
| Endevco | https://www.endevco.com/ | Piezoelectric acceleration and dynamic pressure |
| EvoLogics | https://www.evologics.com/ | Underwater acoustic communication and positioning |
| Exail | https://www.exail.com/ | Inertial navigation and underwater acoustic positioning (formerly iXblue) |
| Faro | https://www.faro.com/en | Three-dimensional laser scanning |
| Febus Optics | https://www.febus-optics.com/en/ | Distributed fibre-optic sensing |
| Futek | https://www.futek.com/ | Force sensors and transmitters |
| Gill Instruments | https://gillinstruments.com/ | Ultrasonic anemometers |
| HBK | https://www.hbkworld.com/ | Strain gauges and force sensors |
| Heidenhain | https://www.heidenhain.de/ | Encoders |
| Honeywell | https://www.honeywell.com/us/en | Pressure and process instrumentation |
| imc Test & Measurement | https://www.imc-tm.com/ | Modular acquisition and test systems |
| Inertial Labs | https://inertiallabs.com/ | Inertial measurement units |
| Interface | https://www.interfaceforce.com/ | Force sensors |
| iX Cameras | https://www.ix-cameras.com/ | High-speed cameras |
| JR3 | https://www.jr3.com/ | Multi-component force and torque sensors |
| Keller | https://www.keller-druck.com/ | Pressure sensors |
| Keyence | https://www.keyence.com/products/measure/laser-1d/ | Laser displacement |
| Kistler | https://www.kistler.com/ | Piezoelectric and multi-component force measurement |
| Klein Marine Systems | https://www.klein.com/ | Side-scan sonar |
| Kongsberg | https://www.kongsberg.com/ | Marine and underwater technology |
| Kübler | https://www.kuebler.com/en/ | Encoders |
| Kulite | https://kulite.com/ | Piezoresistive pressure sensors |
| KVH | https://www.kvh.com/ | Inertial navigation |
| Kyowa | https://www.kyowa-ei.com/en/ | Strain gauges and sensors |
| Labfacility | https://www.labfacility.com/ | Temperature sensors and instruments |
| LaVision | https://www.lavision.de/ | Optical and particle image velocimetry |
| LCM Systems | https://www.lcmsystems.com/ | Force sensors and mooring force measurement |
| Leica Geosystems | https://leica-geosystems.com/products/laser-scanners | Laser scanning and ranging |
| Lorenz Messtechnik | https://www.lorenz-messtechnik.de/ | Torque sensors |
| Lufft (now part of Kipp & Zonen) | https://www.kippzonen.com/about-lufft | Meteorological sensors |
| Luna | https://lunainc.com/ | Fibre-optic sensing |
| M. C. Miller Company | https://www.mcmiller.com/ | Reference electrodes and corrosion probes |
| Michigan Scientific | https://www.michsci.com/ | Telemetry torque |
| Micro-Epsilon | https://www.micro-epsilon.com/displacement-position-sensors/laser-sensor/ | Laser displacement |
| Micro-Measurements | https://micro-measurements.com/ | Strain gauges and stress-analysis instruments |
| National Instruments (Emerson) | https://www.ni.com/ | Modular acquisition and test systems |
| Nortek | https://www.nortekgroup.com/ | Acoustic velocity and wave measurement |
| Novatech Loadcells | https://novatechloadcells.co.uk/ | Force sensors and engineering notes |
| OptaSense | https://www.optasense.com/ | Distributed fibre-optic sensing |
| OptiTrack | https://www.optitrack.com/ | Optical motion capture |
| Panasonic Industry Europe | https://industry.panasonic.eu/ | Industrial sensors and displacement transducers; global site: https://www.panasonic.com/global/industry/ |
| Paroscientific | https://paroscientific.com/ | Quartz resonant pressure sensors |
| PCB Piezotronics | https://www.pcb.com/ | Piezoelectric force and torque sensors |
| PhaseSpace | https://www.phasespace.com/ | Active-LED optical motion capture |
| Photron | https://photron.com/ | High-speed cameras |
| Qualisys | https://www.qualisys.com/ | Optical motion capture |
| RBR | https://rbr-global.com/ | Self-contained pressure and CTD |
| RDP Electronics | https://www.rdpe.com/ | LVDT and draw-wire displacement |
| Rohrback Cosasco | https://www.cosasco.com/ | Corrosion monitoring |
| SBG Systems | https://www.sbg-systems.com/ | Inertial measurement units |
| Scanivalve | https://scanivalve.com/ | Multi-channel pressure scanning |
| Sea-Bird Scientific | https://www.seabird.com/ | CTD and water quality |
| Seapoint | https://www.seapoint.com/ | Optical water-quality sensors |
| SICK | https://www.sick.com/ | Industrial sensors, including laser displacement |
| Silicon Designs | https://www.silicondesigns.com/ | MEMS accelerometers |
| Silixa | https://silixa.com/ | Distributed fibre-optic sensing |
| Smart Fibres | https://www.smartfibres.com/ | Fibre Bragg grating sensing |
| Sofar Ocean (Spotter) | https://www.sofarocean.com/products/spotter | Low-cost wave buoys |
| Solartron Metrology | https://www.solartronmetrology.com/ | LVDTs |
| Sonardyne | https://www.sonardyne.com/ | Underwater acoustic positioning |
| SonTek | https://www.ysi.com/sontek | Acoustic Doppler velocimetry |
| Straightpoint | https://www.straightpoint.com/ | Load shackles and lifting force measurement |
| SubC Imaging | https://www.subcimaging.com/ | Underwater cameras and lighting |
| TE Connectivity (formerly Pressure Systems, ESP pressure scanners) | https://www.te.com/en/products/sensors/pressure-sensors.html | Electronic pressure scanners |
| Technobis | https://technobis.com/ | Fibre-optic sensing |
| Tedea-Huntleigh (VPG Force Sensors) | https://vpgtransducers.com/ | Force sensors |
| Teledyne Marine (including Benthos) | https://www.teledynemarine.com/brands/benthos | Underwater acoustic communication and equipment |
| Teledyne Photometrics | https://www.teledynevisionsolutions.com/ | Scientific cameras |
| Teledyne RDI | https://www.teledynemarine.com/brands/rdi | Acoustic Doppler profiling |
| Teledyne Reson | https://www.teledynemarine.com/brands/reson | Underwater acoustic transducers and hydrophones |
| Thies Clima | https://www.thiesclima.com/ | Meteorological sensors |
| TML | https://www.tml.jp/e | Tokyo Sokki Kenkyujo, strain gauges and measuring instruments |
| Trimble | https://www.trimble.com/en | Satellite positioning |
| TSI | https://tsi.com/ | Laser and optical velocimetry |
| Turner Designs | https://www.turnerdesigns.com/ | Fluorometers and chlorophyll |
| u-blox | https://www.u-blox.com/en | Satellite positioning modules |
| Vaisala | https://www.vaisala.com/en | Meteorological and industrial measurement |
| Valeport | https://www.valeport.co.uk/ | CTD and hydrological instruments |
| Validyne | https://www.validyne.com/products/ | Differential pressure sensors |
| VectorNav | https://www.vectornav.com/ | Inertial measurement units |
| Vicon | https://www.vicon.com/ | Optical motion capture |
| Vision Research (Phantom) | https://www.phantomhighspeed.com/ | High-speed cameras |
| WET Labs (now part of Sea-Bird Scientific) | https://www.seabird.com/wet-labs | Optical water quality |
| WindCube (Vaisala) | https://www.vaisala.com/en/industries-applications/weather-and-environmental | Wind lidar |
| Xsens | https://www.xsens.com/ | Inertial measurement units |
| ZEISS (GOM Metrology) | https://www.zeiss.com/metrology/en/home.html | Photogrammetry and optical 3D measurement |
| ZephIR (ZX Lidars) | https://www.zxlidars.com/ | Wind lidar |

**Facilities and Support**

| Channel | Website | Description |
| --- | --- | --- |
| DHI | https://www.dhigroup.com/ | Hydrodynamic test and model services |
| Edinburgh Designs | http://www.edesign.co.uk/ | Wave-generation equipment |
| FORCE Technology | https://forcetechnology.com/ | Hydrodynamic test and model services |
| HR Wallingford | https://www.hrwallingford.com/ | Physical models and instrumentation |
| MARIN | https://www.marin.nl/ | Hydrodynamic test and model services |
